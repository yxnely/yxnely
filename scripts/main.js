/*
 * Main Script - Yanely Ramirez
*/

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

$('document').ready(init);
