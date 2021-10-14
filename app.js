
let btnToggle = document.querySelector("#btnDarkmode");
let headerWrap = document.querySelector("#header");
let off = document.querySelector(".fa-toggle-off");
let on = document.querySelector(".fa-toggle-on");
let title = document.querySelector(".heading");
let body = document.querySelector("body");

const handleLightMode = () => {
    if( off.style.display === "none" && on.style.display === "inline-block" ) {
        off.style.display = "inline-block";
        on.style.display = "none";
    } else {
        off.style.display = "none";
        on.style.display = "inline-block";
    }
    headerWrap.classList.toggle("dark");
    body.classList.toggle("dark");
    
}
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
btnToggle.addEventListener("click", handleLightMode);

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
