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

    /*внутренний выпадающий список*/
    document.querySelector(".more").addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(".more").classList.toggle("active");
      document.querySelector(".box").classList.toggle("active");
    });
  
    document.querySelector(".more1").addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(".more1").classList.toggle("active");
      document.querySelector(".box1").classList.toggle("active");
    });
  
      document.querySelector(".more2").addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(".more2").classList.toggle("active");
      document.querySelector(".box2").classList.toggle("active");
    });
  
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
  if (screenObj < 415) {
      document.getElementById("nav").style.backgroundColor='black';
      document.getElementById("nav").style.height="40px";

    } else {
      document.getElementById("nav").style.backgroundColor='white';
  }
 }
