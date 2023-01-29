//смена цветов при клике на чайники или инпуты
var image = document.getElementById('imagetest');
var imageArray = ["./img/Image.png", "./img/Images.png", "./img/Image2.png","./img/Image3.png"];
var kettles = document.getElementById(["btn-prev", "btn-prev1", "btn-prev2","btn-prev3"]);
var choice = document.getElementById(["сhoice", "сhoice2", "сhoice3", "сhoice4"]);
var color = ['white', '#95CFD5', '#C42129', '#E0ADC5', '#F5C7B3'];
let screenObj = window.screen.width;
let nav = document.getElementById("nav");

function showColorBlue() {
  document.body.style.backgroundColor = color[1];
  image.src = imageArray[0];
  choice[0].checked = true;
  kettles[0].style.backgroundColor=color[0];
  kettles[1][2][3].style.backgroundColor=color[1];
}
function showColorRed() {
  document.body.style.backgroundColor = color[2];
  image.src = imageArray[1];
  choice[1].checked = true;
  kettles[1].style.backgroundColor=color[0];
  kettles[0][2][3].style.backgroundColor=color[2];
}
function showColorPink() {
  document.body.style.backgroundColor = color[3];
  image.src = imageArray[2];
  choice[2].checked = true;
  kettles[2].style.backgroundColor=color[0];
  kettles[0][1][3].style.backgroundColor=color[3];
}
function showColorBeige() {
  document.body.style.backgroundColor = color[4];
  image.src = imageArray[3];
  choice[3].checked = true;
  kettles[3].style.backgroundColor=color[0];
  kettles[0][1][2].style.backgroundColor=color[4];
}

//мобильная версия

//делаем кликабельно кнопку меню
document.getElementById("sandwichmenu").addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("sandwichmenu").classList.toggle("active");
    document.querySelector(".nav").classList.toggle("active");
}); 

//внутренний выпадающий список

function subMenu(a,b){
  document.querySelector(a).addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(a).classList.toggle("active");
    document.querySelector(b).classList.toggle("active");
  });
}

subMenu(".more",".box");
subMenu(".more1",".box1");
subMenu(".more2",".box2");
subMenu(".more3",".box3");
subMenu(".more4",".box4");
subMenu(".more5",".box5");
subMenu(".more6",".box6");
subMenu(".more7",".box7");
subMenu(".more8",".box8");

// при выборе одного из трех пунктов меню, он меня он на черный, цвет текста белый, находиться по средине
function menu(){
  if (screenObj < 769) {
    nav.style.backgroundColor='black';
    nav.style.height="40px";
      document.getElementById("txt").style.color='white';
      document.getElementById("txt1").style.color='white';
      document.getElementById("txt2").style.color='white';
  } else {
    nav.style.backgroundColor='white';
  }
}

//при выборе одного элемента в блоке меню, остальные скрываються
var down = document.getElementById("down");
var down2 = document.getElementById("down2");
var down3 = document.getElementById("down3");

function sample (a,b,c){
  a.addEventListener('click', (e) => {
    e.preventDefault();
    b.style.display="none";
    c.style.display="none";
  });
}

sample(down,down2,down3);
sample(down2,down,down3);
sample(down3,down,down2);
