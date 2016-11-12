/**
 * Created by Administrator on 2016/9/26.
 */

$(function(){

    $('.good_img').mouseenter(function(){
        $('.move').show();
        $('.bigger').show();
    })
    $('.good_img').mouseleave(function(){
        $('.move').hide();
        $('.bigger').hide();
    })
    $('.good_img').mousemove(function(evt){
        var X=evt.pageX-$('.move').width()/2-$('.good_img').offset().left;
        var Y=evt.pageY-$('.move').height()/2-$('.good_img').offset().top;
        var maxx=$('.good_img').width()-$('.move').width();
        var maxy=$('.good_img').height()-$('.move').height();
        var num=$('.bigger').width()/$('.move').width();
        if (X>maxx){X=maxx};
        if (X<0){X=0};
        if (Y>maxy){Y=maxy};
        if (Y<0){Y=0};
        $('.move').css({left:X,top:Y})
        $('.bigger img').css({left:-X*num,top:-Y*num})
    });                 //购物车放大镜



    $(window).scroll(function(){
        if ($(document).scrollTop()>1150){
            $(".fixed").css({position:"fixed",zIndex:999}).animate({top:0},600)
        }
        if ($(document).scrollTop()<=1150){
            $(".fixed").css({position:"relative"})
        }
    })                  //详情页中的吸顶



    var c = 0;
    $('.group_buygoods_info .bbb').click(function () {
        var index=$('.group_buygoods_info .bbb').index($(this));
        if($(this).attr("class")=="bbb checked"){
            $(this).removeClass('checked').addClass('checkbox');
            $("#together_total_price").text(parseFloat($("#together_total_price").text())-parseFloat($('b').eq(index).text()));
        }else {
            $(this).removeClass('checkbox').addClass('checked');
            $("#together_total_price").text(parseFloat($("#together_total_price").text())+parseFloat($('b').eq(index).text()));
        }

    })//组合购买






    $.ajax({
        url:"../page1.txt",
        dataType:"json",
        success:function(data){
            $(".user_cont").html(data.html);
        },
    })
    $(".comment_page_ li").click(function(){
        var index=$(this).index();
        $(".comment_page_ li").removeClass("page_current").eq(index).addClass("page_current");
        $.ajax({
            url:"../page"+(index+1)+".txt",
            dataType:"json",
            success:function(data){
                $(".user_cont").html(data.html);
            },
        })
    })             //详情页的评论

})







