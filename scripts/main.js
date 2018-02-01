/*
 * Main Script - Yanely Ramirez
*/

const menuItems = document.querySelectorAll('.item');
const allMenuItems = Object.values(menuItems);

const handleColor = e => {
    var target = e.target;
    var project = target.dataset.project;
    var path = 'images/blocks/';

    target.src = path + project + '.png';
}

const handleGreyscale = e => {
    var target = e.target;
    var project = target.dataset.project;
    var path = 'images/blocks/';

    target.src = path + project + '-grey.png';
}


const init = () =>{
    var gridBlocks = $('.grid-tri img');

    gridBlocks
        .mouseenter(handleColor)
        .mouseleave(handleGreyscale);
}

const scrollToItem = e => {
    const section = e.target.dataset.section;
    const target = document.getElementById(section);

    $('html, body').animate({
        scrollTop: $(target).offset().top - 60
    }, 1000);
}

allMenuItems.forEach(x => x.addEventListener('click', scrollToItem));

$('document').ready(init);
