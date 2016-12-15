/**
 * Created by mac on 2016/12/13.
 */
$(function() {
    //$(".scroll").click(function(event){
    //    event.preventDefault();
    //    $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    //});

    var scrollTop=$(window).scrollTop();
    var clientH=$(window).height();
    var clientW=$(window).width();
    var navHeight=$("#nav").height();
    console.log(navHeight);
    //console.log(scrollTop);
    console.log(clientW);
    console.log(clientH);

    //$(".logo a").css({"lineHeight":navHeight});
    //$(".topNav li a").css({"lineHeight":navHeight});

    $(".banner").css({"height":clientH,});  //banner的高度
    if (clientW<=640){
        $(".banner").css({"height":clientH*1/3,});
    }

    var pull 		= $('#pull');
    var menu 		= $('nav ul');
    var menuHeight	= menu.height();
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });



        /*
         var defaults = {
         containerID: 'toTop', // fading element id
         containerHoverID: 'toTopHover', // fading element hover id
         scrollSpeed: 1200,
         easingType: 'linear'
         };
         */


    //var clientH=document.documentElement.clientHeight;
    //console.log(clientH);
    //$(".banner").css({height:clientH})




    //导航点击换色
    $(".top-nav li").click(function(){
        $(".top-nav li").removeClass("active");
        $(this).addClass("active");
    })



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







