//固定定位购物车
;
(function() {

    $(' #sidebar-cart').hover(function() {
        $('.car-bar').css('display', 'block');
    }, function() {
        $('.car-bar').css('display', 'none');
    });
    $(' .phone-app').hover(function() {
        $('.phone-x').css('display', 'block');
    }, function() {
        $('.phone-x').css('display', 'none');
    });
    $('.shopping-cart .car').on('mousemove', function() {
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
    });
    // 回到顶部
    $('.back-top').on('click', function() {
        $('html,body').animate({ //赋值注意内部的属性。
            scrollTop: 0
        });
    });


})(jQuery);


// $('.hot-cont li').on('mousemove', function() {
//     var i = $(this).index();
//     $(this).addClass('active').siblings().removeClass('active');
//     $('.tab_content .item').eq(i).show().siblings().hide();
// });