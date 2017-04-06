$(document).ready(function () {
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
        }
    });

    var mainMenu = $('#menu').data('mmenu');

    $('#menu-button').click(function () {
        mainMenu.open();
    });


});
