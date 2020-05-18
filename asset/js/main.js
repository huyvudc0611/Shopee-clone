$(document).ready(function () {

    $('.overlay__MobileTable').css({
        visibility: 'hidden',
        opacity: '0'
    });
    $('.nav__MobileTablet-list').css({
        left: -310,
        opacity: '0'
    })


    $('.header__mobile-search').click(function (event) {

        if ($('.header__search').css('display') == 'none') {
            $('.header__search').css({
                display: 'flex',
            });
        }
        else {
            $('.header__search').css({
                display: 'none',
            });
        }
    });

    // Nav Mobile
    $('.header__Menu-mobile').click(function () {
        if ($('.overlay__MobileTable').css('visibility') == 'hidden' && $('.overlay__MobileTable').css('opacity') == 0) {
            $('.overlay__MobileTable').css({
                visibility: 'visible',
                opacity: '1'
            });
            $('.nav__MobileTablet-list').css({
                left: 0,
                opacity: '1'
            })
        }
        else {
            $('.overlay__MobileTable').css({
                visibility: 'hidden',
                opacity: '0'
            });
            $('.nav__MobileTablet-list').css({
                left: -310,
                opacity: '0'
            })
        }
    });

    $('.overlay__MobileTable').click(function () {
        $('.overlay__MobileTable').css({
            visibility: 'hidden',
            opacity: '0'
        });
        $('.nav__MobileTablet-list').css({
            left: -310,
            opacity: '0'
        })
    })

});