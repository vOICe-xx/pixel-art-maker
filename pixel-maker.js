const pixWindow = document.getElementById("Pixel-maker");
const btnCreate = document.getElementById("Create");
const GridinpH = document.getElementById("GridinpH");
const GridinpW = document.getElementById("GridinpW");


function gridCreate(height, width){
/* 	document.getElementsByTagName('body')[0].addEventListener('keydown', console.log('body'));
	pixWindow.addEventListener('keydown', console.log('pixWindow'));
	document.getElementById('Main-block').addEventListener('keydown', console.log(event.which)); */
	for (i = 1; i <= height; i++){
		var pRow = document.createElement("div");
		pixWindow.appendChild(pRow);
		for (j = 1; j <= width; j++){
			var pix = document.createElement("div");
			pix.classList.add("Pixel");
			pRow.appendChild(pix);
		}
	}	
};
var pixels = document.querySelectorAll(".Pixel");
/* function draw(){
	for (let j = 0; j < pixels.length; j++){
		pixels[j].id = curColor;
	};
}; */
for (let j = 0; j < pixels.length; j++){
/* 	pixels[j].addEventListener('keydown', console.log('pix')); */
	pixels[j].id = curColor;
};
btnCreate.addEventListener("click", function(){
var height = GridinpH.value;
var width = GridinpW.value;
pixWindow.innerHTML = '';
gridCreate(height, width);
});
var colors = document.querySelectorAll(".ColorPall");
var curColor = '';
for (let i = 0; i < colors.length; i++){
  colors[i].addEventListener('click', function(){
		var curColorBox = document.getElementsByClassName("CurColor");
    curColor = this.id;
		curColorBox[0].id = this.id;
   });
};
