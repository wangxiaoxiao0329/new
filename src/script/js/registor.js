;
(function() {
    $(function() {
        $('#form1').validate({
            rules: {
                username: {
                    required: true,
                    digits: true,
                    rangelength: [11, 11],
                    remote: { //将前端的name给后端
                        url: "../php/login/reg.php", //后台处理程序
                        type: "post" //数据发送方式
                    },

                },

                password: {
                    required: true,
                    minlength: 6,
                    maxlength: 16,
                },
            },
            messages: {
                username: {
                    required: '手机号码格式错误',
                    remote: '该手机号码已注册',
                    digits: "必须是整数",
                    rangelength: "手机号码格式错误",

                },

                password: {
                    required: '密码不能为空',
                    minlength: '密码为6-16位字符，可包含数字、字母和特殊字符',
                },
            }
        });
    });

})(jQuery);