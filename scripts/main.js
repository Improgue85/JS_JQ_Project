function createGrid() {
	for (var rows = 1; rows <= 16; rows++) {
		for (var cols = 1; cols <= 16; cols++){
			$("#box").append("<div class='grid'></div>")
		};
	};
	$(".grid").height(43);
	$(".grid").width(43);
};

function clearDrawing() {
	$('#erase').remove();
};

$(document).ready(function(){
	createGrid();

	/*var square = false;
	function draw() {
		$(".grid").on('click', function(){
			if (square) {
				$(this).css('background-color', 'black');
				square = false;
			} else {
				square = true;
			};
		});
	};*/

	$(".grid").on('click', function start() {
		$(this).addClass("color").css('background-color', 'black');
	});
});