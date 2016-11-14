/**
 * Created by Administrator on 2016/10/28.
 */

$(function(){
    var reg1=/^1[34578]\d{9}$/;
    $('.name').focus(function () {
        $('.warning1').text('请输入正确的的手机号码');  //请输入正确的的手机号码
    })
    $('.name').blur(function () {
        if (reg1.test($('.name').val()) == false) {
            $('.warning1').text('手机格式有误，请重新输入');
        } else {
            $('.warning1').text('');
            setTimeout(function () {
                $('.warning1').text('可以使用');
            }, 1500)
        }
    });       //注册手机号

    var reg2 = /^\w{6,16}$/;
    $('.psd').focus(function () {
        $('.warning2').text(''); //密码需6-16位的数字、字母、下划线
    });
    $('.psd').blur(function () {
        if (reg2.test($('.psd').val()) == false) {
            $('.warning2').text('密码需6-16位的数字、字母、下划线');
        } else {
            $('.warning2').text('');
        }
    });      //注册密码

    $('.psd1').focus(function () {
        $('.warning3').text('');
    });
    $('.psd1').blur(function () {
        if ($('.psd1').val() !== $('.psd').val()) {
            $('.warning3').text('两次输入的密码不匹配');
            if ($('.psd1').val() == "") {
                $('.warning3').text('请输入确认密码！');
            }
        } else {
            $('.warning3').text('');
        }
    }) ;//注册时的 确认密码

    $('.btn-zhuce').click(function () {
        console.log(1);
        if ($('.name').val() == '' || reg1.test($('.name').val()) == false) {
            $('.warning1').text('手机格式有误，请重新输入');
        } else if ($('.psd').val() == '' || reg2.test($('.psd').val()) == false) {
            $('.warning2').text('密码需6-16位的数字、字母、下划线');
        } else if ($('.psd1').val() !== $('.psd').val() || $('.psd1').val() == "") {
            $('.warning3').text('请输入相同的密码');
        } else {
            $('.warning4').text('注册成功，3秒之后跳转登录页面...').css({color: "#c4c4c4", textAlign: "center"});
            setTimeout(function () {
                location.href = 'denglu.html';
            }, 3000)
        }

        $.cookie("usename", $('.name').val(), {path: '/', expires: 9999})
        $.cookie("psd", $('.psd').val(), {path: '/', expires: 9999})
    });    //注册页面中的button
    $.cookie("usename");
    $.cookie("psd");
    $(".form .btn").click(function () {
        if ($(".name11").val() == "" && $(".psd11").val() == "") {
            $('.warning5').text('账户不能为空！')
            $('.warning6').text('密码不能为空！')
        } else {
            if ($.cookie("usename") != $(".name11").val()) {
                $('.warning5').text('账户不存在！');
                return;
            } else if ($.cookie("psd") != $(".psd11").val()) {
                $('.warning6').text('密码错误！');
                return;
            }else{
                location.href="index.html";
            }
        }
    })




























});


