var image = document.getElementById('imagetest');
var imageArray = ["./img/Image.png", "./img/Images.png", "./img/Image2.png","./img/Image3.png"];

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



    //делаем рабочей кнопку меню*/


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
    


   //выбор элемента в блоке меню 

      document.getElementById("down").addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById("down2").style.display="none";
        document.getElementById("down3").style.display="none";
      });
  
      document.getElementById("down2").addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById("down").style.display="none";
        document.getElementById("down3").style.display="none";
      });
  
      document.getElementById("down3").addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById("down").style.display="none";
        document.getElementById("down2").style.display="none";
      });


 function menu(){
  let screenObj = window.screen.width;
  if (screenObj < 769) {
      document.getElementById("nav").style.backgroundColor='black';
      document.getElementById("nav").style.height="40px";
      document.getElementById("txt").style.color='white';
    } else {
      document.getElementById("nav").style.backgroundColor='white';
  }
 }
