/*
 * Main Script - Yanely Ramirez
*/

const handleColor = e => {
    var target = e.target;
    var project = target.dataset.project;
    var path = 'assets/blocks/';

    target.src = path + project + '.png';
}

const handleGreyscale = e => {
    var target = e.target;
    var project = target.dataset.project;
    var path = 'assets/blocks/';

    target.src = path + project + '-grey.png';
}


const init = () =>{
    var gridBlocks = $('.project img');

    gridBlocks
        .mouseenter(handleColor)
        .mouseleave(handleGreyscale);
}

$('document').ready(init);
