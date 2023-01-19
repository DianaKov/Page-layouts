 //делаем рабочей кнопку меню
 $('#sandwichmenu').on('click', function(e) {
    e.preventDefault();
    $('#sandwichmenu').toggleClass("active");
$('.header').toggleClass("active");
});