function createBidderCheckerFromFilters(bidderFilter, networkFilter, adunitFilter) {
    var libraryLinkElements = buildLibraryLinkElementsFromJadDirectoryUrl(location.protocol + '//cdn.api.getjad.io/library/')
        .then(libraryLinkElements => {
            var allPageSlots = buildAllPageSlotsFromLibraryLinkElements(libraryLinkElements)
                .then(allPageSlots => {
                    var allPositions = [];
                    for (const [pageStlotName, pageSlotData] of Object.entries(allPageSlots)) {
                        if (pageStlotName.includes(networkFilter) && pageStlotName.includes(adunitFilter)) {
                            for (const [positionName, positionData] of Object.entries(pageSlotData)) {
                                if (typeof positionData.prebidConfig != "undefined") {
                                    var adUnitPositions = [];
                                    adUnitPositions.push(positionName);
                                }
                                if (typeof adUnitPositions != "undefined") {
                                    allPositions.push(...adUnitPositions)
                                }
                            }
                        }
                    }
                    allUniquePositions = allPositions.filter(onlyUnique)
                    allUniquePositions.sort()
                    var adUnitsData = [];
                    for (const [pageStlotName, pageSlotData] of Object.entries(allPageSlots)) {
                        var adUnitData = [];
                        if (pageStlotName.includes(networkFilter) && pageStlotName.includes(adunitFilter)) {
                            adUnitData.push(pageStlotName);
                            allUniquePositions.map(position => {
                                if (typeof pageSlotData[position] == "undefined") {
                                    adUnitData.push({ status: "n/a", data: null })
                                } else if (typeof pageSlotData[position].prebidConfig == "undefined") {
                                    adUnitData.push({ status: "no hb", data: null })
                                } else if (typeof pageSlotData[position].prebidConfig.bids == "undefined") {
                                    adUnitData.push({ status: "no hb", data: null })
                                } else {
                                    var isPresent = false;
                                    for (el of pageSlotData[position].prebidConfig.bids) {
                                        if (el.bidder == bidderFilter) {
                                            adUnitData.push({ status: true, data: el.params });
                                            isPresent = true;
                                            return
                                        }
                                    }
                                    if (!isPresent) { adUnitData.push({ status: false, data: null }) }
                                }
                            })
                            adUnitsData.push(adUnitData)
                        }
                    }
                    var tableData = [];
                    allUniquePositions.unshift("adunits");
                    tableData.push(allUniquePositions);
                    tableData.push(...adUnitsData);
                    createTable(tableData)
                    document.querySelector("#loader").style.display = "none";
                })
        })
}

function updateData() {
    document.querySelector("#loader").style.display = "flex";
    var bidderFilter = document.getElementById("bidderFilter").value;
    var networkFilter = document.getElementById("networkFilter").value;
    var adunitFilter = document.getElementById("adunitFilter").value;
    document.querySelector("table").remove()
    createBidderCheckerFromFilters(bidderFilter, networkFilter, adunitFilter)
}

createBidderCheckerFromFilters("appnexus", "120157152", "_FR_")

var inputFields = document.querySelectorAll("input");
inputFields.forEach(inputField => {
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            updateData();
        }
    });
})