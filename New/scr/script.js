//смена цветов при клике на чайники или инпуты
var image = document.getElementById('imagetest');
var imageArray = ["./img/Image.png", "./img/Images.png", "./img/Image2.png","./img/Image3.png"];
var kettles = document.getElementById["btn-prev", "btn-prev1", "btn-prev2","btn-prev3"];
var choice = document.getElementById["сhoice", "сhoice2", "сhoice3", "сhoice4"];
var color = ['white', '#95CFD5', '#C42129', '#E0ADC5', '#F5C7B3'];
let screenObj = window.screen.width;
let nav = document.getElementById("nav");

function showColorBlue() {
  document.body.style.backgroundColor = '#95CFD5';
  imagetest.src = imageArray[0];
  choice[0].checked = true;
  kettles[0].style.backgroundColor='white';
  kettles[1][2][3].style.backgroundColor='#95CFD5';
}
function showColorRed() {
  document.body.style.backgroundColor = '#C42129';
  imagetest.src = imageArray[1];
  choice[1].checked = true;
  kettles[1].style.backgroundColor='white';
  kettles[0][2][3].style.backgroundColor='#C42129';
}
function showColorPink() {
  document.body.style.backgroundColor = '#E0ADC5';
  imagetest.src = imageArray[2];
  choice[2].checked = true;
  kettles[2].style.backgroundColor='white';
  kettles[0][1][3].style.backgroundColor='#E0ADC5';
}
function showColorBeige() {
  document.body.style.backgroundColor = '#F5C7B3';
  imagetest.src = imageArray[3];
  choice[3].checked = true;
  kettles[3].style.backgroundColor='white';
  kettles[0][1][2].style.backgroundColor='#F5C7B3';
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
/*subMenu(".more1",".box1");
subMenu(".more2",".box2");
subMenu(".more3",".box3");
subMenu(".more4",".box4");
subMenu(".more5",".box5");
subMenu(".more6",".box6");
subMenu(".more7",".box7");
subMenu(".more8",".box8");*/

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

down.addEventListener('click', (e) => {
  e.preventDefault();
  down2.style.display="none";
  down3.style.display="none";
});

down2.addEventListener('click', (e) => {
  e.preventDefault();
  down.style.display="none";
  down3.style.display="none";
});

down3.addEventListener('click', (e) => {
  e.preventDefault();
  down.style.display="none";
  down2.style.display="none";
});
