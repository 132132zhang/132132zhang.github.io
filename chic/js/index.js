/**
 * Created by mac on 2016/12/13.
 */
$(function() {
    var clientH=$(window).height();
    var clientW=$(window).width();
    var navHeight=$("#nav").height();

//轮播图的高度
    if (clientW>clientH){
        $("#flash-img-list .one img").attr("src","images/ps1.png");
        $("#flash-img-list .two img").attr("src","images/ps2.png");
        $("#flash-img-list .three img").attr("src","images/ps3.png");
        $("#flash-img-list .four img").attr("src","images/ps4.png");
        $("#flash-img-list .five img").attr("src","images/ps5.png");
        $(".banner").css({"height":clientW*(980/1920)});
    }else {
        $("#flash-img-list .one img").attr("src","images/1.png");
        $("#flash-img-list .two img").attr("src","images/2.png");
        $("#flash-img-list .three img").attr("src","images/3.png");
        $("#flash-img-list .four img").attr("src","images/4.png");
        $("#flash-img-list .five img").attr("src","images/5.png");
        $(".banner").css({"height":clientW});
    }


//模特图片的高度
    $(".portfolio-work-grid").css({"height":(clientW/3)*364/468});

//导航栏的 效果
    $("#nav").animate({"top":0},800);
    var pull 		= $('#pull');
    var menu 		= $('nav ul');
    var menuHeight	= menu.height();

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

//时间轴的效果，模特图的、服务的
    new WOW().init();



//  导航点击出现隐藏
	var btn = true;
	$("#pull").click(function(){
		if(btn){
			$(".nav-ul").show();
			btn = !btn;
		}else{
			$(".nav-ul").hide();
			btn = !btn;
		}
	})

    if(clientW<768){
        $(".nav-ul li").click(function(){
            $(".nav-ul").hide();
        })
    }

    //var data={
    //    name:$(".name").val(),
    //    memberInfo:$(".tel").val(),
    //    message:$(".message").val()
    //};
    //
    //$.post("http://www.chic-tech.cn/appService/Member/feedback",data,function(){
    //        console.log(1)
    //},"json")






















});







