const heading = document.getElementById('header');
const menu = document.querySelector('.fa');
const nav = document.querySelector('nav');

if (heading !== null) {
	heading.style.height = `${window.innerHeight}px`;
}

function switchMenu() {
	menu.classList = menu.classList == 'fa fa-bars' ? 'fa fa-times' : 'fa fa-bars'; 
	nav.style.display = nav.style.display == 'flex' ? 'none' : 'flex';
}

menu.addEventListener('click', switchMenu);

$(window).resize(() => {
	menu.classList = 'fa fa-bars';

	if (window.innerWidth >= 768) {
		menu.style.display = 'none';
		nav.style.display = 'block';
	} else {
		menu.style.display = 'block';
		nav.style.display = 'none';
	}
})
