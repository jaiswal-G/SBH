document.addEventListener("DOMContentLoaded", function () {
    const financeBody = document.getElementById("finance-body");
    const totalExpensesElem = document.getElementById("total-expenses");
    const totalCostElem = document.getElementById("total-cost");

    // Retrieve assets from local storage (shared with asset-details page)
    let assets = JSON.parse(localStorage.getItem("assets")) || [];

    let totalExpenses = 0;
    let totalCost = 0;

    // Populate the finance table
    assets.forEach(asset => {
        let row = document.createElement("tr");

        let installationCost = asset.installationCost || Math.floor(Math.random() * 500) + 500; // Dummy value
        let maintenanceCost = asset.maintenanceCost || Math.floor(Math.random() * 200) + 100;
        let renewableCost = asset.renewableCost || Math.floor(Math.random() * 300) + 150;
        let electricityConsumed = asset.electricityConsumed || Math.floor(Math.random() * 500) + 100;
        let electricityCost = electricityConsumed * 0.12; // Assuming $0.12 per kWh

        let assetTotal = installationCost + maintenanceCost + renewableCost + electricityCost;
        totalExpenses += assetTotal;
        totalCost += asset.initialCost + assetTotal;

        row.innerHTML = `
            <td>${asset.type}</td>
            <td>$${asset.initialCost.toFixed(2)}</td>
            <td>$${installationCost.toFixed(2)}</td>
            <td>$${maintenanceCost.toFixed(2)}</td>
            <td>$${renewableCost.toFixed(2)}</td>
            <td>${electricityConsumed} kWh</td>
            <td>$${electricityCost.toFixed(2)}</td>
        `;

        financeBody.appendChild(row);
    });

    // Update total expenses and total cost
    totalExpensesElem.textContent = `$${totalExpenses.toFixed(2)}`;
    totalCostElem.textContent = `$${totalCost.toFixed(2)}`;
});
