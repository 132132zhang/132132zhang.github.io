/**
 * Created by Administrator on 2016/9/27.
 */

$(function () {


    var reg1 = /^1[34578]\d{9}$/;
    $('.zhuce_tel').focus(function () {
        $('.warning1').text('');  //请输入正确的的手机号码
    })
    $('.zhuce_tel').blur(function () {
        if (reg1.test($('.zhuce_tel').val()) == false) {
            $('.warning1').text('手机格式有误，请重新输入');
        } else {
            $('.warning1').text('');
            setTimeout(function () {
                $('.warning1').text('可以使用');
            }, 1500)
        }
    })       //注册手机号
    var reg2 = /^\w{6,16}$/;
    $('.zhuce_psd1').focus(function () {
        $('.warning2').text(''); //密码需6-16位的数字、字母、下划线
    })
    $('.zhuce_psd1').blur(function () {
        if (reg2.test($('.zhuce_psd1').val()) == false) {
            $('.warning2').text('密码需6-16位的数字、字母、下划线');
        } else {
            $('.warning2').text('');
        }
    })       //注册密码
    $('.zhuce_psd2').focus(function () {
        $('.warning3').text('');
    })
    $('.zhuce_psd2').blur(function () {
        if ($('.zhuce_psd2').val() !== $('.zhuce_psd1').val()) {
            $('.warning3').text('两次输入的密码不匹配');
            if ($('.zhuce_psd2').val() == "") {
                $('.warning3').text('请输入确认密码！');
            }
        } else {
            $('.warning3').text('');
        }
    })       //注册时的 确认密码

    $('.yanzheng').focus(function () {
        $('.warning4').text('');
    })
    $('.yanzheng').blur(function () {
        if ($('.yanzheng').val().toUpperCase() !== $('.zhuce_box i').text().toUpperCase()) {
            $('.warning4').text('验证码有误,请重新输入');
        } else {
            $('.warning4').text('');
        }
    })          //验证码的确认

    var arr = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'J', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    var str = '';
    for (var i = 1; i <= 4; i++) {
        var num = parseInt(Math.random() * arr.length);
        str += arr[num];
    }
    $('.zhuce_box i').text(str);     //页面刷新 会随机更新验证码

    $('#change_code').click(function () {
        str = '';
        for (var i = 1; i <= 4; i++) {
            var num = parseInt(Math.random() * arr.length);
            str += arr[num];
        }
        $('.zhuce_box i').text(str);
    })                  //点击 换一张 会随机更新验证码


    $('#contant button').click(function () {
        if ($('.zhuce_tel').val() == '' || reg1.test($('.zhuce_tel').val()) == false) {
            setTimeout(function () {
                $('.warning1').text('手机格式有误，请重新输入');
            }, 1000)
        } else if ($('.zhuce_psd1').val() == '' || reg2.test($('.zhuce_psd1').val()) == false) {
            $('.warning2').text('密码需6-16位的数字、字母、下划线');
        } else if ($('.yanzheng').val() == '' || $('.yanzheng').val().toUpperCase() !== $('.zhuce_box i').text().toUpperCase()) {
            $('.warning4').text('验证码有误,请重新输入');
        } else if ($('.zhuce_psd2').val() !== $('.zhuce_psd1').val() || $('.zhuce_psd2').val() == "") {
            $('.warning3').text('请输入相同的密码');
        } else {
            $('.warning4').text('注册成功，3秒之后跳转登录页面...').css({color: "#6c6c6c", textAlign: "center"});
            setTimeout(function () {
                location.href = 'denglu.html';
            }, 3000)

        }
        $.cookie("usename", $('.zhuce_tel').val(), {path: '/', expires: 9999})
        $.cookie("psd1", $('.zhuce_psd1').val(), {path: '/', expires: 9999})
    })     //注册页面中的button

    var i = 0;
    $('.auto_login').click(function () {
        i++;
        if (i % 2 != 0) {
            $('.auto_login').css({backgroundPosition: '0 -60px'})
        } else {
            $('.auto_login').css({backgroundPosition: '0 -40px'})
        }
    });         //自动登录

    $.cookie("usename");
    $.cookie("psd1");
    $("#contant1 .button1").click(function () {
        if ($(".denglu_ming").val() == "" && $(".denglu_psd").val() == "") {
            $('.warning6').text('密码错误！').css({textAlign: "right", lineHeight: "45px"})
        } else {
                if ($.cookie("usename") != $(".denglu_ming").val()) {
                     $('.warning8').text('账户错误！').css({textAlign: "right", lineHeight: "45px"})
                     return;
                } else if ($.cookie("psd1") != $(".denglu_psd").val()) {
                       $('.warning6').text('密码错误！').css({textAlign: "right", lineHeight: "45px"})
                     return;
                }else if ($('.yanzheng').val().toUpperCase() !== $('.zhuce_box i').text().toUpperCase()){
                    $('.warning6').text('密码错误！').css({textAlign: "right", lineHeight: "45px"})
                    return;
                }else{
                    location.href="足球.html";
                }
        }
    })




})





