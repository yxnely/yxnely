function toggleMenu (e) {
    var navContainer = document.getElementById('navigation');
    var target = e.target;
    var nav = target.nextElementSibling;

    if (nav.style.display == 'none' || nav.style.display == '') {
        navContainer.classList.add('active');

        $(navContainer).animate({
            width: '75%'
        }, 500);

        nav.style.display = 'block';
    } else if (nav.style.display == 'block') {
        $(navContainer).animate({
            width: '0px'
        }, {
            done: function () {
                navContainer.classList.remove('active');
            }
        }, 500);

        nav.style.display = 'none';
    }
}

function scrollAction () {
    var target = $('#web');
       if (target.length) {
           var top = target.offset().top;
           $('html,body').animate({scrollTop: top}, 1000);
           return false;
       }
}

function handleMenu () {
    $('nav').fadeOut();
    $('.navigation-container').removeClass('active');
}

function init () {
    var menu = document.getElementById('menu');
    var button = document.getElementById('scrollButton');
    var link = $('nav > a');

    menu.addEventListener('click', toggleMenu);
    button.addEventListener('click', scrollAction);
    link.off().on('click', handleMenu);
}

$('document').ready(init);
