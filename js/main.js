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

/* custom jQuery code on menu.html page
that when click ghost-button on menu.html page,
shows the coupon via a slide down effect.
*/
    var showCoupon = '#couponImage';

    $(showCoupon).hide();
    $('#clickCoupon').click(function (event) {
        event.preventDefault();
        $(showCoupon).slideDown(3000);
    });

/* custom jQuery code on index.html page
that when hovered/mouseover - image changes
on mouseout - image returns to original.
Created one for each image.
*/
    $('#baked').mouseover(function () {
        $(this).attr('src', 'img/bakedhover.png');
    });

    $('#baked').mouseout(function () {
        $(this).attr('src', 'img/baked.png');
    });

    $('#skillet').mouseover(function () {
        $(this).attr('src', 'img/skillethover.png');
    });

    $('#skillet').mouseout(function () {
        $(this).attr('src', 'img/skillet.png');
    });


});

/* custom javascript code on menu.html page
appears on red colored "Read our Reviews" Section
appears when when page loads; removed when user clicks x
*/
window.onload = runAd;

function runAd() {
    var adBox = 'monthlyAd';

    document.getElementById(adBox).style.display = 'block';
    document.getElementById('closeBox').onclick = function () {
        document.getElementById(adBox).style.display = 'none';
    };
}
