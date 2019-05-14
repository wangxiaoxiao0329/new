// 热卖排行榜tab切换
;
(function() {
    $('.hot-cont li').on('mousemove', function() {
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab_content .item').eq(i).show().siblings().hide();
    });

})(jQuery);
// 主体导航tab切换
;
(function() {
    // console.log($('.m-tab li'))
    $('.m-tab li').on('mousemove', function() {
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');

    });

})(jQuery);
// 在售分类tab切换
;
(function() {
    // console.log($('.classify'))
    $('.classify').hover(function() {
        $('.btn-list').css('display', 'block').find('.item').on('mousemove', function() {
            $(this).addClass('current').siblings().removeClass('current');

        });
    }, function() {
        $('.btn-list').css('display', 'none');
    })

})();