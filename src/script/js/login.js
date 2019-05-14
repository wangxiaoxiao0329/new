;
(function() {
    // 设置cookie过期时间
    function addCookie(key, value, day) {
        var date = new Date();
        date.setDate(date.getDate() + day);
        document.cookie = key + '=' + encodeURI(value) + ';expires=' + date;
    }

    // 点击登录，验证用户名密码
    $('#btn').on('click', function() {
        var $username = $('#username').val();
        var $password = $('#password').val();
        console.log($username);
        $.ajax({
            type: 'post',
            url: '../php/login/login.php',
            data: { //将用户名和密码传输给后端
                name: $username,
                pass: $password
            },
            success: function(data) { //请求成功，接收后端返回的值
                if (!data) { //用户名或者密码错误
                    $('#error').html('请输入正确的手机号或密码');
                    $('#password').val('');
                } else { //成功,存cookie,跳转到首页
                    addCookie('UserName', $username, 7);
                    location.href = 'index1.html';
                }
            }
        })
    });
})(jQuery);