const pixWindow = document.getElementById("Pixel-maker");
const btnCreate = document.getElementById("Create");
const GridinpH = document.getElementById("GridinpH");
const GridinpW = document.getElementById("GridinpW");

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
btnCreate.addEventListener("click", function(event){
var height = GridinpH.value;
var width = GridinpW.value;
pixWindow.innerHTML = '';
gridCreate(height, width);
console.log(height);
});