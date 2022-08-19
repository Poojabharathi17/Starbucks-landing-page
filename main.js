function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}
function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
var nav = document.querySelector('header ul.navigation.active');
var close = document.querySelector('.navigation');
nav.onclick=function()
{
    nav.classList.toggle("close");
}
