$(document).ready(function () {
    //backstretch
    $.backstretch('img/wood.png');

    //mmenu - plugin for hamburger menu
    $('#menu').mmenu({
        // options
        // preventDefault is needed because href points to # on same page
        // if menu linked to other pages, would not need to set
        // preventDefault to false
        //close: true needed because when did above, only, menu stayed open
        onClick: {
            close: true,
            preventDefault: null,
        },
        navbar: {
            title: "Gusteau's"
        }
    }, {
        // configuration
        offCanvas: {
            pageSelector: '#wrapper'
        },
        classNames: {
            fixedElements: {
                fixed: 'fixed',
                ElemInsertMethod: 'prependTo',
                elemInsertSelector: 'header'
            }
        }
    });

    var menuButton = $('#menu-button');
    var mainMenu = $('#menu').data('mmenu');

    $('#menu-button').click(function () {
        mainMenu.open();
    });

    menuButton.on('click', function () {
        mainMenu.open();
    });

    mainMenu.bind('opened', function () {
        setTimeout(function () {
            menuButton.addClass('is-active');
        }, 100);
    });

    mainMenu.bind('closed', function () {
        setTimeout(function () {
            menuButton.removeClass('is-active');
        }, 100);
    });

    //lazy load
    $('img.lazy').lazyload({
        effect: 'fadeIn'
    });

    //owlcarousel
    $('.owl-carousel').owlCarousel();


});

//javascript custom code
window.onload = runAd;

function runAd() {
    var adBox = 'monthlyAd';

    document.getElementById(adBox).style.display = 'block';
    document.getElementById('closeBox').onclick = function () {
        document.getElementById(adBox).style.display = 'none';
    };
}
