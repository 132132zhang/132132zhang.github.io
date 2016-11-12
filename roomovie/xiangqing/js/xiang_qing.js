/**
 * Created by Administrator on 2016/10/3.
 */
(function ($) {
    $(function () {
    	
        $.get("../move1.txt",function(data){
            var data1=eval(data);
            
            console.log(data1);
			
			var index = getCookie("index");
			
			console.log(index);


            $(".cont-title").append(data1[index].movie+"<i>"+data1[index].English+"</i><em class='score'>"+ data1[index].gate+"</em>")
            $(".cont-pic img").attr("src",data1[index].src)
            $(".comment").append("<em class='quot'>“</em>"+data1[index].title+"<em class='quotend'>&nbsp;”</em>")
            $(".direct").text("导演："+data1[index].direct)
            $(".main").text("主演："+data1[index].main)
            $(".type").text("类型："+data1[index].type)
            $(".area").text("制片国家/地区："+data1[index].area)
            $(".language").text("语言："+data1[index].language)
            $(".timelong").text("片长："+data1[index].timelong)
            $(".cont-time").text("上映时间："+data1[index].uptime)
            $(".cont-view .t1 img").attr("src",data1[index].t1)
            $(".cont-view .t2 img").attr("src",data1[index].t2)
            $(".shrink").append("剧情介绍："+data1[index].introduce+"<a class='shrink-btn' href='javascript:;'>展开>></a>")

            $(".shrink-btn").click(function () {
                $(".cont-info .shrink").css({height: "100"});
                $(".shrink").text("剧情介绍："+data1[index].longintroduce);
                $(".shrink").append('<a class="shrink-btn" href="javascript:;">收起<<</a>')
                $(".shrink-btn").click(function () {
                    $(".cont-info .shrink").css({height: "40"});
                    $(".shrink").text("剧情介绍："+data1[index].introduce);
                    $(".shrink").append('<a class="shrink-btn" href="javascript:;">展开>></a>')
                })
            })
        })
        
        //获得点击的数据
        
        /*var oDetailIfo = $(".movie-card-info");
        
        console.log(oDetailIfo.length);*/
        
        



        //展开
        $(".detail-bg img").css({display:"block"}).animate({opacity:1},2000); //背景图片

        $(".movies-open").click(function(){
            $(".detail-movies").addClass("J_moviesWindow");
            $(this).css({display:"none"});
            $(".detail-wrap .detail-cont").css({opacity:0});
        })              //切换影片
        $(".up_movie").click(function(){
            $(".detail-movies").removeClass("J_moviesWindow");
            setTimeout(function(){$(".movies-open").css({display:"block"})},300)
            $(".detail-wrap .detail-cont").animate({opacity:1},300);
        })                  //点击切换

        var m=0;
        var bBtn=true;
        $(".scroll-btn-right").click(function(){
            if(bBtn==true){
                bBtn=false;
                m++;
                if (m>8){
                    m=8;
                    bBtn=true;
                    return;
                }
                $(".detail-movies ul").stop().animate({left:-1038*m},800, function () {
                    bBtn=true;
                });
            }
        })
        $(".scroll-btn-left").click(function(){
            if(bBtn==true){
                bBtn=false;
                m--;
                if (m<0){
                    bBtn=true;
                    m=0;
                    return;
                }
                $(".detail-movies ul").stop().animate({left:-1038*m},800, function () {
                    bBtn=true;
                });
            }
        })

        $(".a2").click(function(){
            $(".a1").removeClass("active");
            $(".a2").addClass("active");
            $(".introduce3").css({display:"block"});
            $(".introduce1").css({display:"none"});
        })
        $(".a1").click(function(){
            $(".a2").removeClass("active");
            $(".a1").addClass("active");
            console.log(2)
            $(".introduce1").css({display:"block"});
            $(".introduce3").css({display:"none"});
        })


        $(".span1").click(function(){
            $(".span2").removeClass("hover");
            $(".span1").addClass("hover");
            $(".list-box").css({display:"block"});
            $(".list-box1").css({display:"none"});
        })
        $(".span2").click(function(){
            $(".span1").removeClass("hover");
            $(".span2").addClass("hover");
            $(".list-box1").css({display:"block"});
            $(".list-box").css({display:"none"});
        })


        var mn=0;
        $(".more1").click(function(){
            mn++;
            if (mn%2!==0){
                $(".yin1").css({height:"217"});
                $(".more1").text('收起');
            }else{
                $(".yin1").css({height:0});
                $(".more1").text('全部');
            }
        })
$(".J_moviesList li").click(function(){
			index=$(this).index();
			$.get("../move1.txt",function(data){
            var data1=eval(data);
            $(".cont-title").html(data1[index].movie+"<i>"+data1[index].English+"</i><em class='score'>"+ data1[index].gate+"</em>")
            $(".cont-pic img").attr("src",data1[index].src)
            $(".detail-bg img").attr("src",data1[index].bg)
            $(".comment").html("<em class='quot'>“</em>"+data1[index].title+"<em class='quotend'>&nbsp;”</em>")
            $(".direct").text("导演："+data1[index].direct)
            $(".main").text("主演："+data1[index].main)
            $(".type").text("类型："+data1[index].type)
            $(".area").text("制片国家/地区："+data1[index].area)
            $(".language").text("语言："+data1[index].language)
            $(".timelong").text("片长："+data1[index].timelong)
            $(".cont-time").text("上映时间："+data1[index].uptime)
            $(".cont-view .t1 img").attr("src",data1[index].t1)
            $(".cont-view .t2 img").attr("src",data1[index].t2)
            $(".shrink").html("剧情介绍："+data1[index].introduce+"<a class='shrink-btn' href='javascript:;'>展开>></a>")

            $(".shrink-btn").click(function () {
                $(".cont-info .shrink").css({height: "100"});
                $(".shrink").text("剧情介绍："+data1[index].longintroduce);
                $(".shrink").append('<a class="shrink-btn" href="javascript:;">收起<<</a>')
                $(".shrink-btn").click(function () {
                    $(".cont-info .shrink").css({height: "40"});
                    $(".shrink").text("剧情介绍："+data1[index].introduce);
                    $(".shrink").append('<a class="shrink-btn" href="javascript:;">展开>></a>')
                })
            })
        })
	})




    })
})(jQuery);


function setCookie(name,value,expires,path){
    var odate=new Date();
    odate.setDate(odate.getDate()+expires);
    document.cookie=name+"="+decodeURIComponent(value)+";expires="+odate+";path="+path;
}

function getCookie(name){
    /*console.log(decodeURIComponent(document.cookie));*/
    var aCookie=document.cookie.split("; ");
    for(var i=0;i<aCookie.length;i++){
        var aTemp=aCookie[i].split("=");
        if(aTemp[0]===name){
            return decodeURIComponent(aTemp[1]);
        }
    }
}