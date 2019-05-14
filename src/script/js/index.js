//主体购物列表 
;
(function() {
    // 主体购物列表数据拼接
    ! function() {
        //1.拼接数据
        $.ajax({
            url: 'http://10.31.163.86/projectname/php/index/beibeidata.php',
            dataType: 'json'
        }).done(function(data) {
            var $html = '<ul>';

            $.each(data, function(index, value) {

                $html += `
          <li>
          <a class="shopping-shows" href="details.html?sid=${value.picid}" target="_blank">
          <div class="show-wrap">
              <img clsaa="lazy" src="${value.url}" style="width:255px;height:255px">
              <p class="title">${value.title}</p>
              <div class="price-info">
                  <p class="cur-price">
                      <span class="currency">¥</span><span class="price-num">${value.price}</span><span class="price-little">.${value.prices}</span>
                  </p>
                  <p class="del-price">¥${value.delete}</p>
                  <p class="discount-desc">1.4折</p>
                  <p>
                  </p>
              </div>
          </div>
       </a>
           </li>

			`;
            });
            $html += '</ul>';
            $('.shopping').html($html);
        });
    }();
})(jQuery);
// 顶部悬浮导航
;
(function() {
    ! function() {
        $(window).on('scroll', function() {
            var $top = $(window).scrollTop();
            if ($top >= 400) {
                $('.top-nav').stop(true).animate({
                    top: 48
                })
            } else {
                $('.top-nav').stop(true).animate({
                    top: -48
                })
            }
        })
    }();
})(jQuery);
// 懒加载
;
(function() {
    $(function() {
        $("img.lazy").lazyload({
            effect: "fadeIn"
        });
    });
})(jQuery);