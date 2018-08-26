const pixWindow = document.getElementById("Pixel-maker");
const btnCreate = document.getElementById("Create");
const GridinpH = document.getElementById("GridinpH");
const GridinpW = document.getElementById("GridinpW");
const btnFill = document.getElementById('Fill');
const btnBrush = document.getElementById('Brush');
const colorPicker = document.getElementById('Color');
const colorWrap = document.getElementById('ColorWrap');
const btnLoad = document.getElementById('Load');
const btnSave = document.getElementById('Save');
colorWrap.style.background = colorPicker.value;
var pixels = null;
var curColor = 'black';
var curTool = 1;
var isDown = null;
var curPixel = null;
var mouBtn = null;
var saveFile = {
	'pixels': []
};
var loadFile = {
	'pixels': []
};

colorPicker.addEventListener('change', function(){
	curColor = event.target.value;
	colorWrap.style.background = curColor;
});


var gridCreate = function gridCreate(height, width){ //Создание канваса
pixWindow.innerHTML = '';
pixels = null;
var height = GridinpH.value;
var width = GridinpW.value;
	for (i = 1; i <= height; i++){ 
		var pRow = document.createElement("div");
		pixWindow.appendChild(pRow); //Добавление строки 
		for (j = 1; j <= width; j++){
			var pix = document.createElement("div");
			pix.classList.add("Pixel");
			pRow.appendChild(pix); //Добавление ячейки
		}
	}
pixels = document.querySelectorAll(".Pixel"); //Сбор всех пикселей в канвасе
};

gridCreate();

var switcher = function switcher(){
	if (curTool == 0){
		fill();
		console.log(curTool);
	} else {
		brush();
		console.log(curTool);
	};
};

var fill = function fill(){
	curTool = 1;
	for (let i = 0; i < pixels.length; i++){
		pixels[i].addEventListener('click', function(){
			var toFill = [];
			var firstToFill = i;
			var sameColor = pixels[i].style.background;
				console.log(sameColor);
				
		});
	};
};

btnCreate.addEventListener("click", gridCreate);

var brush = function brush(){
	curTool = 0;
	pixWindow.addEventListener('mousedown', function(){ 
		isDown = true; 
		mouBtn = event.which;
	});
	pixWindow.addEventListener('mouseup', function(){ //Выключаем рисование
		isDown = false;
	});
	for (let j = 0; j < pixels.length; j++){
			pixels[j].addEventListener('mouseenter', function(){
			curPixel = event.target;
			if (isDown){
				curPixel.style.background = curColor; //Меняем цвет при нажатой кнопке
				if (mouBtn == 3){
				curPixel.style.background = 'white';
				};
			};
		});
	};
}; 

btnBrush.addEventListener('click', switcher);

btnFill.addEventListener('click', switcher);

btnSave.addEventListener('click', function(){
	for (let j = 0; j < pixels.length; j++){
		saveFile.pixels.push({j: pixels[j].style.background});
	};
	localStorage.setItem('session', JSON.stringify(saveFile));
	console.log(saveFile);
});

btnLoad.addEventListener('click', function(){
	loadFile = JSON.parse(localStorage.getItem('session'));
	for (let j = 0; j < loadFile.length; j++){
		
	};
	console.log(loadFile);

/* 	loadFile.pixels.push(JSON.parse(localStorage.getItem('session')));

	pixWindow.innerHTML = loadFile.pixels[0]; */
});
