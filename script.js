$(document).ready(function(){
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.slider').slider({full_width: true });
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('.myreviews').carousel({
        numVisible: 8,
        shift: 55,
        padding: 55,
        

    });
    $('input#input_text, textarea#textarea2').characterCounter();


})
var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display= "none";
})
