function createBidderPositionCheckerFromFilters(adunitFilter) {
    document.getElementById("adunitFilter").value = adunitFilter;
    var libraryLinkElements = buildLibraryLinkElementsFromJadDirectoryUrl(location.protocol + '//cdn.api.getjad.io/library/')
        .then(libraryLinkElements => {
            var allPageSlots = buildAllPageSlotsFromLibraryLinkElements(libraryLinkElements)
                .then(allPageSlots => {

                    // get all positions from the selected pageSlot

                    var allPositions = [];
                    var pageSlotData = allPageSlots[adunitFilter];
                    console.log(adunitFilter)
                    for (const [positionName, positionData] of Object.entries(pageSlotData)) {
                        allPositions.push(positionName);
                    }

                    // get all unique bidders from the selected pageSlot

                    var allBidders = [];
                    allPositions.forEach(positionName => {
                        if (typeof(pageSlotData[positionName].prebidConfig) !== "undefined" && typeof(pageSlotData[positionName].prebidConfig.bids) !== "undefined") {
                            for (const [index, bid] of Object.entries(pageSlotData[positionName].prebidConfig.bids)) {
                                allBidders.push(bid.bidder)
                            }
                        }
                    })
                    var allUniqueBidders = allBidders.filter(onlyUnique)
                    allUniqueBidders.sort()

                    console.log(allUniqueBidders)


                    var positionsData = [];

                    allPositions.map(position => {
                        var positionData = [];
                        positionData.push(position);
                        allUniqueBidders.map(bidder => {
                            if (typeof pageSlotData[position] == "undefined") {
                                positionData.push({ status: "n/a", data: null })
                            } else if (typeof pageSlotData[position].prebidConfig == "undefined" || typeof pageSlotData[position].prebidConfig.bids == "undefined") {
                                positionData.push({ status: "no hb", data: null })
                            } else {
                                var isPresent = false;
                                for (el of pageSlotData[position].prebidConfig.bids) {
                                    if (el.bidder === bidder) {
                                        positionData.push({ status: true, data: el.params });
                                        isPresent = true;
                                        break
                                    }
                                }
                                if (!isPresent) {
                                    positionData.push({ status: false, data: null })
                                }
                            }
                        })

                        positionsData.push(positionData)

                    })

                    var tableData = [];
                    allUniqueBidders.unshift("positions");
                    tableData.push(allUniqueBidders);
                    tableData.push(...positionsData);
                    createTable(tableData)
                    document.querySelector("#loader").style.display = "none";

                    var formlist = document.querySelector("datalist")

                    for (pageSlotName of Object.keys(allPageSlots)) {
                        var formOption = document.createElement("option");
                        formOption.value = pageSlotName
                        formlist.appendChild(formOption)
                    }

                })
        })
}

function updateData() {
    document.querySelector("#loader").style.display = "flex";
    var adunitFilter = document.getElementById("adunitFilter").value;
    console.log(adunitFilter);
    document.querySelector("table").remove()
    createBidderPositionCheckerFromFilters(adunitFilter)
}

createBidderPositionCheckerFromFilters("/120157152/ALLOCINE_FR_WEB/_default")

var inputFields = document.querySelectorAll("input");
inputFields.forEach(inputField => {
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Tab") {
            updateData();
        }
    });
})