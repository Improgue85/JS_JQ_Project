$(document).ready(function createGrid() {
	for (var rows = 1; rows <= 16; rows++) {
		for (var cols = 1; cols <= 16; cols++){
			$("#box").append("<div class='grid'></div>")
		};
	};
	$(".grid").height(50);
	$(".grid").width(50);
});