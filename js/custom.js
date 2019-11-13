$(function () {
    if($('.select').length) {
        $('.select').styler();
    }


    //menu
    if($('.js-menu-header').length) {

        //при загрузке страницы
        initHeaderMenu();

        // $(document).on('mouseover', '.menu__item', function () {
        //     var linkBox = $(this);
        //     var curSubmenu = linkBox.find('.menu__item-submenu');
        //     var header = linkBox.closest('.header');
        //     var meniItems = header.find('.menu__item');
        //
        //     if(curSubmenu.length) {
        //         if (!linkBox.hasClass('opened')) {
        //             meniItems.removeClass('opened');
        //             linkBox.addClass('opened');
        //             header.addClass('header--menu-opened');
        //         }
        //     }
        // });
        //
        // $(document).on('mouseout', '.menu__item', function (e) {
        //     var curElement = $(e.target);
        //     var openedMenuItem = $('.menu__item.opened');
        //     var header = $('.header');
        //
        //     if(openedMenuItem.length) {
        //         console.log(!openedMenuItem.has(curElement))
        //         if (curElement.hasClass('opened') || openedMenuItem.has(curElement)) {
        //
        //             openedMenuItem.removeClass('opened');
        //             header.removeClass('header--menu-opened');
        //
        //         }
        //     }
        // });
    }
});


function initHeaderMenu() {

    setSubmenuOffsets($('.menu__item'));

}

function setSubmenuOffsets(menuItem) {
    var header = menuItem.closest('.header');
    var curSubmenu = menuItem.find('.menu__item-submenu');
    var offsetTop = header.innerHeight();

    curSubmenu.css({
        paddingTop: offsetTop,
    });
}