document.addEventListener("DOMContentLoaded", function () {
    const graphSection = document.getElementById("graph-section");
    const assetTable = document.getElementById("asset-table");
    const backButton = document.getElementById("back-button");
    const ctx = document.getElementById("usageGraph").getContext("2d");
    const assetTableBody = document.querySelector("#asset-table tbody");
    const addAssetButton = document.getElementById("add-asset");
    const assetForm = document.getElementById("asset-form");
    let chartInstance;

    document.querySelectorAll(".view-graph").forEach(button => {
        button.addEventListener("click", function () {
            const assetType = this.getAttribute("data-type");
            showGraph(assetType);
        });
    });

    function showGraph(assetType) {
        assetTable.style.display = "none";
        graphSection.style.display = "block";

        const usageData = {
            pump: [10, 50, 20, 80, 30],
            pipeline: [15, 35, 25, 70, 55],
            valve: [5, 15, 10, 40, 25],
            "treatment-plant": [12, 32, 22, 60, 52]
        };

        if (chartInstance) {
            chartInstance.destroy();
        }

        chartInstance = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                datasets: [{
                    label: `${assetType} Usage`,
                    data: usageData[assetType] || [],
                    backgroundColor: "rgba(0, 123, 255, 0.5)",
                    borderColor: "#007bff",
                    borderWidth: 2,
                    tension: 0.4
                }]
            }
        });
    }

    backButton.addEventListener("click", function () {
        graphSection.style.display = "none";
        assetTable.style.display = "table";
    });

    addAssetButton.addEventListener("click", function () {
        const assetType = document.getElementById("asset-type").value;
        const installationDate = document.getElementById("installation-date").value;
        const maintenanceDate = document.getElementById("maintenance-date").value;
        
        if (assetType && installationDate && maintenanceDate) {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${assetType}</td>
                <td>${installationDate}</td>
                <td>${maintenanceDate}</td>
                <td><button class="view-graph" data-type="${assetType}">View Graph</button></td>
                <td><button class="delete-asset">Remove</button></td>
            `;
            assetTableBody.appendChild(row);

            row.querySelector(".view-graph").addEventListener("click", function () {
                showGraph(assetType);
            });

            row.querySelector(".delete-asset").addEventListener("click", function () {
                row.remove();
            });
        }
    });
});
