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
const colors = document.getElementById('Colors');
colorWrap.style.background = colorPicker.value;
var height = GridinpH.value;
var width = GridinpW.value;
var pixels = null;
var curColor = 'black';
var isFill = false;
var isDown = false;
var curPixel = null;
var mouBtn = null;
var colorsArr = new Array(28);
var saveFile = {
	'pixels': [],
	'height': 0,
	'width': 0
};
var loadFile = {
	'pixels': []
};

GridinpH.addEventListener('change', function(){
	height = GridinpH.value;
});

GridinpW.addEventListener('change', function(){
	width = GridinpW.value;
});

colorPicker.addEventListener('change', function(){
	curColor = event.target.value;
	colorWrap.style.background = curColor;
	var color = document.createElement("div");
	color.classList.add("Color");
	color.style.background = curColor;
	colorsArr.unshift(color);
	color.addEventListener('click', function(){
		curColor = color.style.background;
		colorWrap.style.background = curColor;
	});
	colorsArr.pop();
	console.log(colorsArr);
	console.log(colors.childNodes);
	colors.appendChild(colorsArr[0]);
	if (colors.childElementCount == 29){
		colors.childNodes[0].remove();
	};
});
document.addEventListener('mousedown', function(){
	isDown = true;
	mouBtn = event.button;
});

document.addEventListener('mouseup', function(){
	isDown = false;
	mouBtn = event.button;
});

var gridCreate = function gridCreate(){ //Создание канваса
pixWindow.innerHTML = '';
pixels = null;
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

var fill = function fill(){
	if (isFill == true){
		for (let i = 0; i < pixels.length; i++){
			pixels[i].addEventListener('click', function(){
				var toFill = [];
				var firstToFill = i;
				var sameColor = pixels[i].style.background;	
			});
		};
	};
};

btnCreate.addEventListener('click', gridCreate);

var brush = function brush(){
	if (isFill == false){
		for (let j = 0; j < pixels.length; j++){
			pixels[j].addEventListener('mousemove', function(){
				curPixel = event.target;
				if (isDown){
					if (mouBtn == 2){
						curPixel.style.background = 'white';
						curPixel.style.border = "1px solid #f1eeee";
					} else {
						let curBorder = "1px solid" + curColor;
						curPixel.style.background = curColor; //Меняем цвет при нажатой кнопке
						curPixel.style.border = curBorder;
					};
				};
			});
		};
	}; 
};

brush();

var save = function save(){
	saveFile.pixels = [];
	for (let j = 0; j < pixels.length; j++){
		saveFile.pixels.push({id: j, back: pixels[j].style.background});
	};
	saveFile.height = height;
	saveFile.width = width;
	localStorage.setItem('session', JSON.stringify(saveFile));
	console.log(saveFile);
};

var load = function load(){
	loadFile = null;
	loadFile = JSON.parse(localStorage.getItem('session'));
	console.log(loadFile);
	pixWindow.innerHTML = '';
	pixels = null;
		for (i = 1; i <= loadFile.height; i++){
			var pRow = document.createElement("div");
			pixWindow.appendChild(pRow); //Добавление строки
			for (j = 0; j <= loadFile.width - 1; j++){
				var pix = document.createElement("div");
				pix.classList.add("Pixel");
				pix.id = loadFile.pixels[j].id;
				pix.style.background = loadFile.pixels[j].back;
				pRow.appendChild(pix); //Добавление ячейки
			}
		loadFile.pixels.splice(0, 64);
		}
	pixels = document.querySelectorAll(".Pixel"); //Сбор всех пикселей в канвасе
};


btnBrush.addEventListener('click', function(){isFill = false});

btnFill.addEventListener('click', function(){isFill = true});

btnSave.addEventListener('click', save);

btnLoad.addEventListener('click', load);