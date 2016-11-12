/**
 * Created by Administrator on 2016/9/26.
 */
$(function(){
    setTimeout(function(){
        $('.topbanner_big').animate({opacity:0},500);
        $('.topbanner_small').animate({opacity:1},500); //topbanner 变化的过程用延迟期来实现
        $('.header_topbanner .span1').css({display:'block'});
    },4000)
    setTimeout(function(){
        $('.wrap').animate({top:100+'px'},500);
    },3000)         //最上方两个图片的切换效果 以及整体top值得改变

    $('.header_topbanner .span1').click(function(){
        $('.header_topbanner .span1').css({display:'none'});
        $('.header_topbanner .span2').css({display:'block'});
        $('.topbanner_big').animate({opacity:1},500);
        $('.topbanner_small').animate({opacity:0},500);
        $('.wrap').animate({top:300+'px'},500)
    })      //最上方的  展开
    $('.header_topbanner .span2').click(function(){
        $('.header_topbanner .span1').css({display:'block'});
        $('.header_topbanner .span2').css({display:'none'});
        $('.topbanner_big').animate({opacity:0},500);
        $('.topbanner_small').animate({opacity:1},500);
        $('.wrap').animate({top:100+'px'},500)
    })      //最上方的  收起



    var date_mm=new Date().getTime();
    var date_stop=new Date(2016,12,1,0,0,0).getTime();
    var date_cha=(date_stop-date_mm)/1000;

    var Itimer=null;
    var day=parseInt(date_cha/(60*60*24));
    var hour=parseInt(date_cha/(60*60)%24);
    var min=parseInt(date_cha/60%60);
    var miao=parseInt(date_cha%60);

    Itimer=setInterval(function(){
        miao--;
        if (miao<0){
            miao=59;
            min-=1;
        }
        if (min<0){
            min=59;
            hour-=1;
        }
        if (hour<0){
            hour=23;
            day-=1;
        }
        if (day<0){
            day=0;
        }
        if (miao==0&&min==0&&hours==0&&day==0){
            miao=0;
            min=0;
            hour=0;
            day=0;
            clearInterval(Itimer);
        }
        $('.qianggou .day').text(day);
        $('.qianggou .hour').text(hour);
        $('.qianggou .min').text(min);
        $('.qianggou .miao').text(miao);

        $('.sale_tip_time .day1').text(day);
        $('.sale_tip_time .hour1').text(hour);
        $('.sale_tip_time .min1').text(min);
        $('.sale_tip_time .miao1').text(miao);
    },1000);         //限时抢购




    var bBtn=true;          //首页瀑布流
var wnb=0;
$(window).scroll(function(){
    if (bBtn==true&& $(document).scrollTop()>=$("#groupGoods li:last").offset().top-120){
        bBtn=false;
        if(wnb==0){
            $.ajax({
                url:"../data1.txt",
                dataType:"json",
                success:function(data){
                    $("#groupGoods").append(data.html);
                },
            })
        }
        bBtn=true;
        if (wnb==1&&bBtn==true){
            $.ajax({
                url:"../data2.txt",
                dataType:"json",
                success:function(data){
                    $("#groupGoods").append(data.html);
                },
            })
        }
        wnb++;
        console.log(1)
    }
});













})

