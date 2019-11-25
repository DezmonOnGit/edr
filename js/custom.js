$(function () {
    if($('.select').length) {
        $('.select').styler();
    }


    //menu
    if($('.js-menu-header').length) {

        //при загрузке страницы
        initHeaderMenu();

        // при ресайзе
        $(window).resize(function () {
            initHeaderMenu();
        });
    }

    //sliders
    if($('.owl-carousel').length) {

        var sliderMainOptions = {
            items : 1,
            nav: true,
            smartSpeed: 700,
            navText: [makeSliderArrow('arrow-prev'),makeSliderArrow('arrow-next')],
        };

        $('.owl-carousel').owlCarousel(sliderMainOptions);

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

function makeSliderArrow(arrowClasses) {
    return  '<svg class="' + arrowClasses + '" fill="white" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9428 1.05727C11.4635 1.57797 11.4635 2.42219 10.9428 2.94289L3.88558 10.0001L10.9428 17.0573C11.4635 17.578 11.4635 18.4222 10.9428 18.9429C10.4221 19.4636 9.57785 19.4636 9.05715 18.9429L1.05715 10.9429C0.536451 10.4222 0.536451 9.57797 1.05715 9.05727L9.05715 1.05727C9.57785 0.536573 10.4221 0.536573 10.9428 1.05727Z"/>\n' +
            '</svg>';
}