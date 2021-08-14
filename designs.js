// Select color input
var color = document.getElementById('colorPicker');
// Select size input
var gridSize = document.getElementById('sizePicker');
// Define existing table from HTML
var canvasTable = document.getElementById('pixelCanvas');
// Trigger grid creation when submit selected
gridSize.addEventListener('submit', function(event) {
	// Prevent refreshing of page
	event.preventDefault();
	// Select height input
	var n = document.getElementById('inputHeight').value;
	// Select width input
	var m = document.getElementById('inputWidth').value;
	// Call makeGrid function
	makeGrid(n, m);
	// console.log('height: ' + n + ' and width: ' + m);
});

function makeGrid(n, m) {
	// Remove existing table
	while(canvasTable.hasChildNodes()) {
		canvasTable.removeChild(canvasTable.lastChild);
	}
	// Loop to create row based on height
	for(var r = 0; r < n; r++) {
		// Create empty <tr> elements until rows = height value
		var row = canvasTable.insertRow(r);
		// Loop to create columns based on width
		for(var c = 0; c < m; c++) {
			// Create new columns until columns = width value
			let cell = row.insertCell(c);
			// Assign click listener to table cell to update background colour
			// when clicked
			cell.addEventListener('click', function() {
				cell.style.backgroundColor = color.value;
			});
		}
	}
}