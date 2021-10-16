function createPositionCheckerFromFilters(positionFilter, networkFilter, adunitFilter) {
    var libraryLinkElements = buildLibraryLinkElementsFromJadDirectoryUrl(location.protocol + '//cdn.api.getjad.io/library/')
        .then(libraryLinkElements => {
            var allPageSlots = buildAllPageSlotsFromLibraryLinkElements(libraryLinkElements)
                .then(allPageSlots => {
                    var allBidders = [];
                    var allUniqueBidders = [];
                    for (const [pageStlotName, pageSlotData] of Object.entries(allPageSlots)) {
                        var adUnitBidders = [];
                        var uniqueAdUnitBidders = [];
                        if (pageStlotName.includes(networkFilter) && pageStlotName.includes(adunitFilter)) {
                            if (typeof pageSlotData[positionFilter] != "undefined" && typeof pageSlotData[positionFilter].prebidConfig != "undefined" && typeof pageSlotData[positionFilter].prebidConfig.bids != "undefined") {
                                for (const [index, bid] of Object.entries(pageSlotData[positionFilter].prebidConfig.bids)) {
                                    adUnitBidders.push(bid.bidder)
                                }
                            }
                        }
                        if (typeof adUnitBidders != "undefined" && adUnitBidders.length > 0) {
                            adUnitBidders.map(adUnitBidder => allBidders.push(adUnitBidder))
                        }
                        var uniqueAdUnitBidders = allBidders.filter(onlyUnique)
                        allBidders.push(...uniqueAdUnitBidders)
                    }
                    allUniqueBidders = allBidders.filter(onlyUnique)
                    var adUnitsData = [];
                    for (const [pageStlotName, pageSlotData] of Object.entries(allPageSlots)) {
                        var adUnitData = [];
                        if (pageStlotName.includes(networkFilter) && pageStlotName.includes(adunitFilter)) {
                            if (typeof pageSlotData[positionFilter] != "undefined" && typeof pageSlotData[positionFilter].prebidConfig != "undefined") {
                                adUnitData.push(pageStlotName);
                                allUniqueBidders.map(bidder => {
                                    if (typeof pageSlotData[positionFilter].prebidConfig == "undefined") {
                                        adUnitData.push({ status: false, data: null })
                                    } else if (typeof pageSlotData[positionFilter].prebidConfig.bids == "undefined") {
                                        adUnitData.push({ status: false, data: null })
                                    } else {
                                        var isPresent = false;
                                        for (el of pageSlotData[positionFilter].prebidConfig.bids) {
                                            if (el.bidder == bidder) {
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
                    }
                    var tableData = [];
                    allUniqueBidders.unshift("adunits");
                    tableData.push(allUniqueBidders);
                    tableData.push(...adUnitsData);
                    createTable(tableData)
                    document.querySelector("#loader").style.display = "none";
                })
        })
}

function updateData() {
    document.querySelector("#loader").style.display = "flex";
    var positionFilter = document.getElementById("positionFilter").value;
    var networkFilter = document.getElementById("networkFilter").value;
    var adunitFilter = document.getElementById("adunitFilter").value;
    document.querySelector("table").remove()
    createPositionCheckerFromFilters(positionFilter, networkFilter, adunitFilter)
}

createPositionCheckerFromFilters("rectangle_atf", "120157152", "_FR_")

var inputFields = document.querySelectorAll("input");
inputFields.forEach(inputField => {
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            updateData();
        }
    });
})