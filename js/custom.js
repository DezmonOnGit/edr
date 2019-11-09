$(function () {
    if($('.select').length) {
        $('.select').styler();
    }


    //menu
    if($('.js-menu-header').length) {

        $(document).on('click', '.menu__link', function (e) {
            var curLink = $(this);
            var linkBox = curLink.closest('.menu__item');
            var curSubmenu = linkBox.find('.menu__item-submenu');
            if(curSubmenu.length) {

                e.preventDefault();
                var header = curLink.closest('.header');

                if (!linkBox.hasClass('opened')) {
                    checkOpenedMenuItems(linkBox, function () {
                        linkBox.addClass('opened');
                        header.addClass('header--menu-opened');
                        curSubmenu.slideDown();
                    });
                } else {
                    linkBox.removeClass('opened');
                    header.removeClass('header--menu-opened');
                    curSubmenu.slideUp();
                }
            }
        });
    }
});

function  checkOpenedMenuItems(curItem, callback) {
    var items = curItem.siblings('.menu__item');

    items.each(function (index, item) {
        if($(item).hasClass('opened')) {
            $(item).removeClass('opened');
            $(item).find('.menu__item-submenu').slideUp();
        }
    });

    if(typeof callback !== 'undefined') {
        callback();
    }
}