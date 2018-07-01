// Select color input
var color = $("#colorPicker").val();
$("#colorPicker").on("change", function() {
						 color = $("#colorPicker").val();
					 });
// Select size input
var m, n, table;
table = $("#pixelCanvas");
// When size is submitted by the user, call makeGrid()

function makeGrid(height, witdth) {

// Your code goes here!
	var rows = height,
		cols = witdth;
	for (var r = 0; r < rows; r++)
	{
		var tr = $('<tr>');
		for (var c = 0; c < cols; c++)
			$('<td>').appendTo(tr); //fill in your cells with something meaningful here
		tr.appendTo(table);
	}
}

$("#sizePicker").submit(function() {

							makeGrid($("#inputHeight").val(), $("#inputWeight").val());
							event.preventDefault();
						});
$("#pixelCanvas").on("click", "td", function(){
	$(this).css("background-color", color);
});
