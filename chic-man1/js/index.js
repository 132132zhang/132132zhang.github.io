/**
 * Created by mac on 2016/12/13.
 */
$(function() {
    var clientH=$(window).height();
    var clientW=$(window).width();
    var navHeight=$("#nav").height();

//轮播图的高度
    if (clientW<=768){
        $(".banner").css({"height":clientH*3/5});
    }else if (clientW>768 && clientW<=992){
        $(".banner").css({"height":clientH*2/3});
    }else {
        $(".banner").css({"height":clientH});
    }

//导航栏的 效果
    $("#nav").animate({"top":0},800);
    var pull 		= $('#pull');
    var menu 		= $('nav ul');
    var menuHeight	= menu.height();
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

//时间轴的效果，模特图的、服务的
    new WOW().init();

//    表单（联系我们）
    var name=$(".name");
    var tel=$(".tel");
    var message=$(".message");
    var submit=$(".submit");
    var noEmpty=$(".no_empty");

    //表单中的姓名
    name.focus(function(){
        if (name.val()=="请输入您的姓名..."){
            name.val("");
        }
    });
    name.blur(function(){
        if (name.val()==""){
            name.val("请输入您的姓名...")
        }
    })
    //表单中的电话/邮箱
    tel.focus(function(){
        if (tel.val()=="请输入您的手机号/邮箱..."){
            tel.val("");
        }
    });
    tel.blur(function(){
        if (tel.val()==""){
            tel.val("请输入您的手机号/邮箱...")
        }
    })
    //表单中的内容信息
    message.focus(function(){
        if (message.val()=="请输入内容..."){
            message.val("");
        }
    });
    message.blur(function(){
        if (message.val()==""){
            message.val("请输入内容...")
        }
    })

//    消息提交 按钮
    submit.click(function(){
        if(name.val()=="请输入您的姓名..."||tel.val()=="请输入您的手机号/邮箱..."||message.val()=="请输入内容..."){
            noEmpty.css({"display":"block"}).anmite({"bottom":"3%"});
            return false;
        }
    })
























});







