//смена цветов при клике на чайники или инпуты
var image = document.getElementById('imagetest');
var imageArray = ["./img/Image.png", "./img/Images.png", "./img/Image2.png","./img/Image3.png"];
let screenObj = window.screen.width;
let nav = document.getElementById("nav");

function showColorBlue() {
  document.body.style.backgroundColor = '#95CFD5';
  imagetest.src = imageArray[0];
  document.getElementById("сhoice").checked = true;
  document.getElementById("btn-prev").style.backgroundColor='white';
  document.getElementById("btn-prev3").style.backgroundColor='#95CFD5';
  document.getElementById("btn-prev2").style.backgroundColor='#95CFD5';
  document.getElementById("btn-prev1").style.backgroundColor='#95CFD5';
}
function showColorRed() {
  document.body.style.backgroundColor = '#C42129';
  imagetest.src = imageArray[1];
  document.getElementById("сhoice2").checked = true;
  document.getElementById("btn-prev1").style.backgroundColor='white';
  document.getElementById("btn-prev").style.backgroundColor='#C42129';
  document.getElementById("btn-prev2").style.backgroundColor='#C42129';
  document.getElementById("btn-prev3").style.backgroundColor='#C42129';
}
function showColorPink() {
  document.body.style.backgroundColor = '#E0ADC5';
  imagetest.src = imageArray[2];
  document.getElementById("сhoice3").checked = true;
  document.getElementById("btn-prev2").style.backgroundColor='white';
  document.getElementById("btn-prev1").style.backgroundColor='#E0ADC5';
  document.getElementById("btn-prev").style.backgroundColor='#E0ADC5';
  document.getElementById("btn-prev3").style.backgroundColor='#E0ADC5';
}
function showColorBeige() {
  document.body.style.backgroundColor = '#F5C7B3';
  imagetest.src = imageArray[3];
  document.getElementById("сhoice4").checked = true;
  document.getElementById("btn-prev3").style.backgroundColor='white';
  document.getElementById("btn-prev2").style.backgroundColor='#F5C7B3';
  document.getElementById("btn-prev1").style.backgroundColor='#F5C7B3';
  document.getElementById("btn-prev").style.backgroundColor='#F5C7B3';
}

//мобильная версия

//делаем кликабельно кнопку меню
  document.getElementById("sandwichmenu").addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById("sandwichmenu").classList.toggle("active");
      document.querySelector(".nav").classList.toggle("active");
      document.getElementById("sandwichmenu").classList.toggle("active");
      
      

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
  }); 


//при выборе одного элемента в блоке меню, остальные скрываються + цвет фона меняем на черный, а текста на белый
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

// модальнык окна
var showModal = document.querySelector('.showModal');
		var wrapper = document.querySelector('.wrapper');
		var closeBtn = document.querySelector('.closeBtn');
        var showModalUser = document.querySelector('.showModalUser');
		var wrapperUser = document.querySelector('.wrapperUser');
		var closeBtnUser = document.querySelector('.closeBtnUser');

		showModal.addEventListener('click', showModalWindow);
        closeBtn.addEventListener('click', hideModalWindow);
        showModalUser.addEventListener('click', showModalWindowUser);
		closeBtnUser.addEventListener('click', hideModalWindowUser);

		function showModalWindow(){
			wrapper.classList.toggle('hide');
		}

		function hideModalWindow(){
			wrapper.classList.toggle('hide');
		}
        function showModalWindowUser(){
			wrapperUser.classList.toggle('hide');
		}

		function hideModalWindowUser(){
			wrapperUser.classList.toggle('hide');
		}
