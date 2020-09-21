// from data.js
var tableData = data;
//console.log(tableData);



// Create references
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

//console.log($tbody);
//console.log(button);
//console.log(inputFieldDate);
//console.log(inputFieldCity);
//console.log(columns);

// Input the data into the html 
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);


// Create an event listener for the button
// Set up the filter button for date and city
button.on("click", () => {

    d3.event.preventDefault();
    
    var inputDate = inputFieldDate.property("value").trim();

    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    
    $tbody.html("");

    let response = {filterDate}

    if(response.filterDate.length !== 0) 
        {addData(filterDate);
    }
    
        else {
            $tbody.append("tr").append("td").text("No Sightings Here...Moving On....");
        }
})