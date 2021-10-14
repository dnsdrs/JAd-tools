function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function createTable(tableData) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    tableData.forEach(function(rowData) {
        var row = document.createElement('tr');

        rowData.forEach(function(cellData) {
            var cell = document.createElement('td');
            if (cellData === true) {
                cell.classList.add("green")
            } else if (cellData === false) {
                cell.classList.add("red")
            } else if (cellData === "n/a") {
                cell.classList.add("na")
            } else if (cellData === "no hb") {
                cell.classList.add("no_hb")
            }
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
}

function createDivTable(tableData) {
    var table = document.createElement('div');
    table.classList.add("table")
    tableData.forEach(function(rowData) {
        rowData.forEach(function(cellData) {
            var cell = document.createElement('div');
            cell.classList.add("cell")
            if (cellData === true) {
                cell.classList.add("green")
            } else if (cellData === false) {
                cell.classList.add("red")
            }
            cell.appendChild(document.createTextNode(cellData));
            table.appendChild(cell);
        });
    });
    document.body.appendChild(table);
}

async function buildLibraryLinkElementsFromJadDirectoryUrl(JadDirectoryUrl) {
    const parser = new DOMParser();
    const response = await fetch(JadDirectoryUrl);
    const responseText = await response.text();
    const listOfLibrariesDocument = parser.parseFromString(responseText, "text/html");
    const libraryLinkElements = listOfLibrariesDocument.documentElement.querySelectorAll("a");
    return libraryLinkElements
}

async function buildAllPageSlotsFromLibraryLinkElements(libraryLinkElements) {
    var allPageSlots = {};
    for (const [index, libraryLinkElement] of Object.entries(libraryLinkElements)) {
        const parser = new DOMParser();
        const response = await fetch(libraryLinkElement.href);
        const responseText = await response.text();
        const lib = parser.parseFromString(responseText, "text/html");
        var content = lib.documentElement.querySelector('body').innerText;
        content = content.replace("window.jad=window.jad||{};jad.config=jad.config||{};jad.config.pagesSlots=", "");
        content = content.replace("window.jad = window.jad || {};jad.config = jad.config || {};jad.config.pagesSlots = ", "");
        var until = content.search(";")
        content = content.substring(0, until)
        content = JSON.parse(content)
        for (key of Object.keys(content)) {
            allPageSlots[key] = content[key]
        }
    }
    return allPageSlots
}