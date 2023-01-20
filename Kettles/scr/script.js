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



    //делаем рабочей кнопку меню
    $('#sandwichmenu').on('click', function(e) {
		e.preventDefault();
		$('#sandwichmenu').toggleClass("active");
    $('.nav').toggleClass("active");
	});

    //внутренний выпадающий список

    $('.more').on('click', function(e) {
		e.preventDefault();
		$('.more').toggleClass("active");
    $('.box').toggleClass("active");
	});

  $('.more1').on('click', function(e) {
    e.preventDefault();
    $('.more1').toggleClass("active");
    $('.box1').toggleClass("active");
  });

    $('.more2').on('click', function(e) {
		e.preventDefault();
		$('.more2').toggleClass("active");
    $('.box2').toggleClass("active");
	});

  /*выбор элемента в блоке меню*/
    $('#down').on('click', function(e){
      e.preventDefault();
      document.getElementById("down2").style.display="none";
      document.getElementById("down3").style.display="none";
    });

    $('#down2').on('click', function(e){
      e.preventDefault();
      document.getElementById("down").style.display="none";
      document.getElementById("down3").style.display="none";
    });

    $('#down3').on('click', function(e){
      e.preventDefault();
      document.getElementById("down").style.display="none";
      document.getElementById("down2").style.display="none";
    });

 function menu(){
  let screenObj = window.screen.width;
  console.log(screenObj);
  if (screenObj < 376) {
      document.getElementById("nav").style.backgroundColor='black';
      document.getElementById("nav").style.height="40px";

    } else {
      document.getElementById("nav").style.backgroundColor='white';
  }
 }
