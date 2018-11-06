require(['jquery','swiper','bscroll'], function ($, swiper, bscroll) {
    var mySwiper = new swiper('.swiper1');
    var mySwiper2 = new swiper('.swiper2',{
        pagination: {
            el:'.swiper-pagination',
            clickable: true
        }
    });
    $('footer').on('click', 'dl', function () {
        var idx = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        mySwiper.slideTo(idx, 1000, false);//切换到第一个slide，速度为1秒
    });
    new bscroll('.con', {
        probetype: 2,
        click: true
    });
})