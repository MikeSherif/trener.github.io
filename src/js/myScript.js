$('a[href^="#"]').click(function () {
    let valHref = $(this).attr("href");
    $('html,body').animate({scrollTop: $(valHref).offset().top - 50 + "px"});
});
$('#blue').click(function () {
    $('img[id="t-shirt"]').attr("src", "img/tishkaB.jpg");
});
$('#grey').click(function () {
    $('img[id="t-shirt"]').attr("src", "img/tishka.png");
});
$('#yellow').click(function () {
    $('img[id="t-shirt"]').attr("src", "img/tishkaY.jpg");
});
