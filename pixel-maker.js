const pixWindow = document.getElementById("Pixel-maker");
const btnCreate = document.getElementById("Create");
const GridinpH = document.getElementById("GridinpH");
const GridinpW = document.getElementById("GridinpW");

function gridCreate(height, width){ //Создание канваса
	for (i = 1; i <= height; i++){ 
		var pRow = document.createElement("div");
		pixWindow.appendChild(pRow); //Добавление строки 
		for (j = 1; j <= width; j++){
			var pix = document.createElement("div");
			pix.classList.add("Pixel");
			pRow.appendChild(pix); //Добавление ячейки
		}
	}
};


btnCreate.addEventListener("click", function(){ //Кнопка создания канваса
var height = GridinpH.value;
var width = GridinpW.value;
pixWindow.innerHTML = '';
gridCreate(height, width);
});

btnCreate.addEventListener('click', function(){
	var pixels = document.querySelectorAll(".Pixel"); //Сбор всех пикселей в канвасе
	for (let j = 0; j < pixels.length; j++){
		var isDown = false;
		pixels[j].addEventListener('mouseover', function(){ //Вход в пиксель
			var curPixel = event.target;
			pixels[j].addEventListener('mousedown', function(){ //Меняем цвет при нажатии кнопки
				isDown = true;
				curPixel.style.background = curColor;
			});
			pixels[j].addEventListener('mouseup', function(){ //Выключаем рисование
				isDown = false;
			});
			if (isDown){
				curPixel.style.background = curColor; //Меняем цвет при нажатой кнопке
			};
		}); 
 	}; 
});

var curColor = 'black';
document.getElementById('color').addEventListener('change', function(){
	curColor = event.target.value;
});

/* var colors = document.querySelectorAll(".ColorPall"); //Сбор цветов в палитре
var curColor = '';
for (let i = 0; i < colors.length; i++){
  colors[i].addEventListener('click', function(){
		var curColorBox = document.getElementsByClassName("CurColor"); //Назначение текущего цвета
    curColor = this.id;
		curColorBox[0].id = this.id;
   });
}; */