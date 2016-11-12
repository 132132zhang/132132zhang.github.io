/**
 * Created by Administrator on 2016/10/4.
 */
$(function(){
    //上映即将上映切换
    $(".soon-move").click(function(){
        $(".just-move").removeClass("move-first");
        $(".soon-move").addClass('move-first');
        $(".tab-movie-list2").css({display:'block'});
        $(".tab-movie-list").css({display:'none'});
    })
    $(".just-move").click(function(){
        $(".soon-move").removeClass('move-first');
        $(".just-move").addClass("move-first");
        $(".tab-movie-list2").css({display:'none'});
        $(".tab-movie-list").css({display:'block'});
    })
    //影片介绍
    $(".movie-card-info").mouseenter(function(){
        $(this).find(".movie-card-mask").stop().animate({opacity:'0.7',top:'50px'},100)
        $(this).find(".movie-card-list").stop().animate({opacity:'1',top:'50px'},100)
    })
    $(".movie-card-info").mouseleave(function(){
        $(this).find(".movie-card-mask").stop().animate({opacity:'0',top:'0'},100)
        $(this).find(".movie-card-list").stop().animate({opacity:'0',top:'0'},100)
    })
    //票房排行


    $(".weeklist li").mouseenter(function(){
        $(".weeklist li").removeClass("current");
        $(".poster").css({display:'none'});
        $(".name").css({width:'60%'});
        $(".rating").css({float:'right',width:'20%'})
        $(".buy").css({display:'none'});
        var Index = $(this).index();
        $(".weeklist li").eq(Index).removeClass("current").addClass("current");
        $(".poster").eq(Index).css({display:'block',marginLift:'16px',float:'left'});
        $(".name").eq(Index).css({width:'45%'});
        $(".rating").eq(Index).css({float:'left',marginLeft:'15px',width:'45%'})
        $(".buy").eq(Index).css({display:'block'});
    })
    $(".weeklist2 li").mouseenter(function(){
        $(".weeklist2 li").removeClass("current2");
        $(".poster2").css({display:'none'});
        $(".name2").css({width:'60%'});
        $(".want-watch").css({float:'right',width:'20%'})
        $(".actor").css({display:'none'});
        var Index = $(this).index();
        $(".weeklist2 li").eq(Index).removeClass("current2").addClass("current2");
        $(".poster2").eq(Index).css({display:'block',marginLeft:'16px',float:'left'});
        $(".name2").eq(Index).css({width:'45%'});
        $(".want-watch").eq(Index).css({float:'left',marginLeft:'15px',width:'45%'})
        $(".actor").eq(Index).css({display:'block'});
    })
    $(".weeklist3 li").mouseenter(function(){
        $(".weeklist3 li").removeClass("current3");
        $(".poster3").css({display:'none'});
        $(".name3").css({width:'60%'});
        $(".rating2").css({float:'right',width:'20%'})
        $(".actor2").css({display:'none'});
        var Index = $(this).index();
        $(".weeklist3 li").eq(Index).removeClass("current3").addClass("current3");
        $(".poster3").eq(Index).css({display:'block',marginLeft:'16px',float:'left'});
        $(".name3").eq(Index).css({width:'45%'});
        $(".rating2").eq(Index).css({float:'left',marginLeft:'15px',width:'45%'})
        $(".actor2").eq(Index).css({display:'block'});
    })
    //数据
    $.get("move1.txt",function(data){
        var arr = eval(data);
        $.each(arr,function(i,v){
            $(".bt-l").each(function(a){
                $(".bt-l").eq(a).text(arr[a].movie)
            })
            $(".bt-r").each(function(a){
                $(".bt-r").eq(a).text(arr[a].gate)
            })
            $(".movie-card-poster img").each(function(a){
                $(".movie-card-poster img").eq(a).attr("src",arr[a].src)
            })
            $(".direct").each(function(a){
                $(".direct").eq(a).text("导演："+arr[a].direct)
            })
            $(".movie-main").each(function(a){
                $(".movie-main").eq(a).text("主演："+arr[a].main)
            })
            $(".type").each(function(a){
                $(".type").eq(a).text("类型："+arr[a].type)
            })
            $(".area").each(function(a){
                $(".area").eq(a).text("地区："+arr[a].area)
            })
            $(".language").each(function(a){
                $(".language").eq(a).text("语言："+arr[a].language)
            })
            $(".timelong").each(function(a){
                $(".timelong").eq(a).text("片长："+arr[a].timelong)
            })
            $(".movie-card-soon").each(function(a){
                $(".movie-card-soon").eq(a).text("上映时间："+arr[a+6].uptime)
            })
        })
    })
})