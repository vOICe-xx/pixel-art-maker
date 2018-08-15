const pixWindow = document.getElementById("Pixel-maker");
const Gridinp = document.getElementById("Gridinp");
const vGridinp = Gridinp.value;
function gridCreate(height, width){
	
	

	for (i = 1; i <= height; i++){
		var pRow = document.createElement("div");
		pixWindow.appendChild(pRow);
		for (j = 1; j <= width; j++){
			var pix = document.createElement("div");
			pix.classList.add("Pixel");
			pRow.appendChild(pix);
		}
	}	
}
gridCreate(4, 4);