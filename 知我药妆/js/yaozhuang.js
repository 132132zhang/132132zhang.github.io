/**
 * Created by Administrator on 2016/9/20.
 */
(function ($) {
    $(function () {

        $('.weixin').mouseenter(function () {
            $(this).css({background: '#fff'});
            $('.weixin i').css({background: "url('../img/topnav.png') 0 -106px"});
            $('.wechat').css({display: 'block'}).stop().animate({height: 100}, 500);
        })
        $('.weixin').mouseleave(function () {
            $(this).css({background: ''});
            $('.weixin i').css({background: "url('../img/topnav.png') 0 -70px"});
            $('.wechat').stop().animate({height: 0}, 500);
        })   //微信商城

        $('.xiaowo').mouseenter(function () {
            $(this).css({background: '#fff'});
            $('.xiaowo i').css({background: "url('../img/topnav.png') 0 -106px"});
            $('.myhome').css({display: 'block'}).stop().animate({height: 150, padding: '3px 0 10px'}, 500);
        })
        $('.xiaowo').mouseleave(function () {
            $(this).css({background: ''});
            $('.xiaowo i').css({background: "url('../img/topnav.png') 0 -70px"});
            $('.myhome').stop().animate({height: 0, padding: '0'}, 500);
        }) //我的小窝

        $('.item_service').mouseenter(function () {
            $(this).css({background: '#fff'});
            $('.item_service i').css({background: "url('../img/topnav.png') 0 -106px"});
            $('.kehu').css({display: 'block'}).stop().animate({height: 120, padding: '3px 0 10px'}, 500);
            ;
        })
        $('.item_service').mouseleave(function () {
            $(this).css({background: ''});
            $('.item_service i').css({background: "url('../img/topnav.png') 0 -70px"});
            $('.kehu').stop().animate({height: 0, padding: 0}, 500);
        }) //客户服务

        $('.header_cshopcar').mouseenter(function () {
            $('.shopgoods').css({height: 280, display: 'block'});
            $('.myshopcar').css({height: 36, borderBottom: '2px solid #fff'});
        })
        $('.header_cshopcar').mouseleave(function () {
            $('.shopgoods').stop().animate({height: 0}, 500, function () {
                $('.shopgoods').css({display: 'none'});
            });
            $('.myshopcar').css({borderBottom: '1px #e2e2e2 solid'});
        })      //我的购物车

        $('.hmcm_list').mouseenter(function () {
            $('.hmcm_shop_list').css({display: 'block'}).stop().animate({height: '288px'}, 500);
        });
        $('.hmcm_list').mouseleave(function () {
            $('.hmcm_shop_list').stop().animate({height: 0}, 500, function () {
                $('.hmcm_shop_list').css({display: 'none'});
            });               //知我商城 --的效果
        })

        $('.header_mc_info li').mouseenter(function () {
            var Iindex = $(this).index();
            $('.header_mc_info li').each(function (i) {
                if (i <= Iindex) {
                    $('.header_mc_info li').eq(i).stop().animate({left: -74 + (26 * i) + 'px', width: '74px'}, 400)
                }
            });
        })
        $('.header_mc_info li').mouseleave(function () {
            var Iindex = $(this).index();
            $('.header_mc_info li').each(function (i) {
                if (i <= Iindex) {
                    $('.header_mc_info li').eq(i).stop().animate({left: (35 * i) + 'px', width: '0'}, 400)
                }
            })
        })          //手风琴的效果

        var m = 0;
        var timer = null;
        $('.banner_btn a').click(function () {
            m = $(this).index();
            $('.f_img li').animate({opacity: 0}, 300, function () {
                $(this).css('display', 'none');
            });
            $('.f_img li').eq(m).css({display: 'block'}).stop().animate({
                opacity: 1
            }, 300);

            $('.banner_btn a').removeClass('blue').eq(m).addClass('blue');
        });             //点击按钮时，轮播图进行切换
        timer = setInterval(function () {
            m++;
            if (m > 4) {
                m = 0;
            }
            $('.f_img li').animate({opacity: 0}, 300, function () {
                $(this).css('display', 'none');
            });
            $('.f_img li').eq(m).css({display: 'block'}).stop().animate({
                opacity: 1
            }, 300);
            $('.banner_btn a').removeClass('blue').eq(m).addClass('blue');
        }, 4000);     //轮播图 定时器

        $('.banner').mouseenter(function () {
            clearInterval(timer);
        })          //当鼠标放在图片上定时器停止
        $('.banner').mouseleave(function () {
            timer = setInterval(function () {
                m++;
                if (m > 4) {
                    m = 0;
                }
                $('.f_img li').animate({opacity: 0}, 300, function () {
                    $(this).css('display', 'none');
                });
                $('.f_img li').eq(m).css({display: 'block'}).stop().animate({
                    opacity: 1
                }, 300);
                $('.banner_btn a').removeClass('blue').eq(m).addClass('blue');
            }, 4000);
        })         //当鼠标离开图片定时器继续。。     主banner轮播图


        var f = 0;
        $('.wufeng_rightbtn').click(function () {
            f++;
            if (f > 4) {
                f = 1;
                $('.wufeng_banner ul').css({left: -1100})
                $('.cb_title_h2 .gouwu_tuijian ul').css({left: -960})
            }
            $('.wufeng_banner ul').stop().animate({left: -1100 * (f + 1)}, 500);
            $('.cb_title_h2 .gouwu_tuijian ul').stop().animate({left: -960 * (f + 1)}, 500);
            return false;
        })      //无缝运动  右边按钮
        $('.wufeng_leftbtn').click(function () {
            f--;
            if (f < -1) {
                f = 2;
                $('.wufeng_banner ul').css({left: -4400})
                $('.cb_title_h2 .gouwu_tuijian ul').css({left: -3840})
            }
            $('.wufeng_banner ul').stop().animate({left: -1100 * (f + 1)}, 500);
            $('.cb_title_h2 .gouwu_tuijian ul').stop().animate({left: -960 * (f + 1)}, 500);
        })      //无缝运动  左边按钮


        var Iindex = 0
        $('.brand_b_nav li').mouseenter(function () {
            Iindex = $(this).index();
            $('.brand_b_nav li').removeClass('blue_current').eq(Iindex).addClass('blue_current');
            $('.brand_bc_page').css({display: 'none'}).eq(Iindex).css({display: 'block'});
        })          //选项卡的 切换
        $('.bbc_leftbtn').click(function () {
            Iindex--;
            if (Iindex < 0) {
                Iindex = 3;
            }
            $('.brand_b_nav li').removeClass('blue_current').eq(Iindex).addClass('blue_current');
            $('.brand_bc_page').css({display: 'none'}).eq(Iindex).css({display: 'block'});
        })      //点击左边的按钮 可以切换
        $('.bbc_rightbtn').click(function () {
            Iindex++;
            if (Iindex > 3) {
                Iindex = 0;
            }
            $('.brand_b_nav li').removeClass('blue_current').eq(Iindex).addClass('blue_current');
            $('.brand_bc_page').css({display: 'none'}).eq(Iindex).css({display: 'block'});
        })    //点击右边的按钮 可以切换


        $('.sidebar_login').mouseenter(function () {
            $('.deng_lu1').css({display: 'block'}).stop().animate({opacity: 1, left: -103}, 500)
        })
        $('.sidebar_login').mouseleave(function () {
            $('.deng_lu1').stop().animate({left: -160, opacity: 0}, 500, function () {
                $('.deng_lu1').css({display: 'none'});
            })
        })          //右边固定的 登录|注册
        $('.sidebar_collect').mouseenter(function () {
            $('.ai_xin1').css({display: 'block'}).stop().animate({opacity: 1, left: -103}, 500)
        })
        $('.sidebar_collect').mouseleave(function () {
            $('.ai_xin1').stop().animate({left: -160, opacity: 0}, 500, function () {
                $('.ai_xin1').css({display: 'none'});
            })
        })          //右边固定的 我的收藏
        $('.sidebar_foot').mouseenter(function () {
            $('.jiao_ya1').css({display: 'block'}).stop().animate({opacity: 1, left: -103}, 500)
        })
        $('.sidebar_foot').mouseleave(function () {
            $('.jiao_ya1').stop().animate({left: -160, opacity: 0}, 500, function () {
                $('.jiao_ya1').css({display: 'none'});
            })
        })          //右边固定的 我看过的
        $('.sidebar_wechat').mouseenter(function () {
            $('.iphone_ewm1').css({display: 'block'})
        })
        $('.sidebar_wechat').mouseleave(function () {
            $('.iphone_ewm1').css({display: 'none'});
        })          //右边固定的 扫描二维码
        $('.sidebar_servers').mouseenter(function () {
            $('.kefu_xin1').css({display: 'block'}).stop().animate({opacity: 1, left: -103}, 500)
        })
        $('.sidebar_servers').mouseleave(function () {
            $('.kefu_xin1').stop().animate({left: -160, opacity: 0}, 500, function () {
                $('.kefu_xin1').css({display: 'none'});
            })
        })          //右边固定的 客服中心

        $('.sidebar_top').click(function () {
            $(document).scrollTop(0);
        })          //右边固定的 回到顶部

        $('.sidebar_shopcar').click(function () {
            $('.sidebar_content').css({display: 'block'}).stop().animate({left: -300}, 500)
        })          //右边固定的 点击购物车之后出来的 div
        $('.sidebar_cont_closebtn').click(function () {
            $('.sidebar_content').stop().animate({left: 35}, 500, function () {
                $('.sidebar_content').css({display: 'none'});
            })
        })

        $(window).scroll(function () {
            if ($(document).scrollTop() >= 800) {
                $('.side_nav').stop().animate({opacity: 1}, 300);
            }
            if ($(document).scrollTop() < 800) {
                $('.side_nav').stop().animate({opacity: 0}, 100);
            }
        })          //左边随着滚动条的变化 继而出现的div

        var a = 0;
        $('.dan_xuan label').click(function () {
            a = $(this).index();
            $('.dan_xuan label').css({backgroundPosition: '0 0'}).eq(a - 1).css({backgroundPosition: '0 -20px'});
        })
        var b = 0;
        $('.duo_xuan label').click(function () {
            b = $(this).index();
            $('.duo_xuan label').eq(b).css({backgroundPosition: '0 -60px'});
        })         //肌肤档案

        $('.skin_quesition_btnway').click(function () {
            $('.skin_quesition').css({display: 'none'});
            $('.skin_method').css({display: 'block'});
            $('#reselect').show();
        })

        $('#reselect').click(function () {
            $('#reselect').hide();
            $('.skin_quesition').css({display: 'block'});
            $('.skin_method').css({display: 'none'});
        })

        //购物车中的数量 会随着点击 '加入购物车' 而增加
        $('.goods-number').text($.cookie('goodsNumber'));
        $('.sshopcar_amout').text($.cookie('goodsNumber'));


        if ($.cookie("goodsname") == undefined || $.cookie("goodsname") == "") {
            $(".shopgoods_empty").show();//空的购物车显示
            $(".shopgoods_incar").hide();//有商品的购物车消失
        } else {
            $(".shopgoods_empty").hide();
            $(".shopgoods_incar").show();
            //字符串拼接
            $('.shopgoods_incar').append("<ul class='iscroll_cont'><li><a href='javascript:;' class='img_car'>" +
                "<img src=" +
                $.cookie('goodsimg') +
                    //用cookie记住的商品图片
                "></a><div class='header_goodsinfo'><p class='header_ginfo_name'>" +
                "<a href='javascript:;'>" +
                $.cookie('goodsname') +
                    //用cookie记住的商品名称
                "</a></p>" +
                "<div class='header_ginfo_opearte'><span class='header_ginfo_price'>￥" +
                $.cookie('goodsprice') +
                    //用cookie记住的商品价钱
                "</span>" +
                " <p class='header_ginfo_amount'><span class='h_amout_down1'></span>" +
                "<input type='text' value='" +
                $.cookie('goodsNumber') +
                    //用cookie记住的商品数量
                "' class='yin_car'>" +
                "<span class='h_amout_up1'></span></p>" +
                "<a class='header_ginfo_del' href='javascript:;'>删除</a></div></div></li>" +
                "<li class='reduce' style=' display:none'><a href='javascript:;' class='img_car'>" +
                "<img src='../img/coupon.jpg'></a>" +
                "<div class='header_goodsinfo'><p class='header_ginfo_name'>" +
                "<a href='javascript:;'><span class='gift_flag'>[满赠]</span>国庆超神券299-100</a>" +
                "</p><div class='header_ginfo_opearte'><span class='header_ginfo_price'>￥0</span>" +
                " <p class='header_ginfo_amount'><span class='amout_down_style'></span>" +
                "<input type='text' value='1'><span class='amout_up_style'></span>" +
                "</p></div></div></li>" +
                "</ul><div class='header_shopgoods_allinfo'>" +
                "<p class='h_allinfo_jianshu'>共<span>" +
                $('.sshopcar_amout').text() +
                    //右侧小圆 里面显示的数量
                "</span>件商品</p>" +
                "<p class='h_allinfo_zongjia'>共计<span>￥</span><em>" +
                $.cookie('goodsNumber') * $.cookie('goodsprice') +
                    //用cookie记住的数量*单价
                "</em></p>" +
                "<p class='h_allinfo_gobuy'><a href='mycar.html'>去购物车结算</a></p></div>")
        }



        var rrr = 0;
        $('.add_car').click(function () {  //详情页中的那个
            //$('.sshopcar_amout').text(parseInt($('#buy_number').val())+ parseInt($('.sshopcar_amout').text()));
            $(".shopgoods_empty").hide();
            $(".shopgoods_incar").show();
            if ($.cookie("goodsname") == undefined || $.cookie("goodsname") == "") {
                $.cookie('goodsNumber', $('#buy_number').val(), {path: '/', expires: 9999});
                $.cookie('goodsname', $('.goodname').text(), {path: '/', expires: 9999});
                $.cookie('goodsprice', $('.price').text(), {path: '/', expires: 9999});
                $.cookie('goodsimg', $('.images').attr("src"), {path: '/', expires: 9999});

                $('.shopgoods_incar').append("<ul class='iscroll_cont'><li><a href='javascript:;' class='img_car'>" +
                    "<img src=" +
                    $.cookie('goodsimg') +
                    "></a><div class='header_goodsinfo'><p class='header_ginfo_name'>" +
                    "<a href='javascript:;'>" +
                    $.cookie('goodsname') +
                    "</a></p>" +
                    "<div class='header_ginfo_opearte'><span class='header_ginfo_price'>￥" +
                    $.cookie('goodsprice') +
                    "</span>" +
                    " <p class='header_ginfo_amount'><span class='h_amout_down1'></span>" +
                    "<input type='text' value='" +
                    $.cookie('goodsNumber') +
                    "' class='yin_car'>" +
                    "<span class='h_amout_up1'></span></p>" +
                    "<a class='header_ginfo_del' href='javascript:;'>删除</a></div></div></li>" +
                    "<li class='reduce' style=' display:none'><a href='javascript:;' class='img_car'>" +
                    "<img src='../img/coupon.jpg'></a>" +
                    "<div class='header_goodsinfo'><p class='header_ginfo_name'>" +
                    "<a href='javascript:;'><span class='gift_flag'>[满赠]</span>国庆超神券299-100</a>" +
                    "</p><div class='header_ginfo_opearte'><span class='header_ginfo_price'>￥0</span>" +
                    " <p class='header_ginfo_amount'><span class='amout_down_style'></span>" +
                    "<input type='text' value='1'><span class='amout_up_style'></span>" +
                    "</p></div></div></li>" +
                    "</ul><div class='header_shopgoods_allinfo'>" +
                    "<p class='h_allinfo_jianshu'>共<span>" +
                    $.cookie('goodsNumber') +
                    "</span>件商品</p>" +
                    "<p class='h_allinfo_zongjia'>共计<span>￥</span><em>" +
                    $.cookie('goodsNumber') * $.cookie('goodsprice') +
                    "</em></p>" +
                    "<p class='h_allinfo_gobuy'><a href='mycar.html'>去购物车结算</a></p></div>")
                $(".sshopcar_amout").text($.cookie("goodsNumber"));   //右侧购物车的数量
                $('.goods-number').text($.cookie('goodsNumber'));      //最上方购物车的数量
                del();
            } else {
                for (var i = 0; i < $(".h_amout_up1").length; i++) {
                    $('.yin_car').eq(i).val(parseInt($('#buy_number').val()) + parseInt($(".yin_car").eq(i).val()));
                }
                $.cookie("goodsNumber", $(".yin_car").eq(rrr).val(), {path: '/', expires: 9999});
                $(".h_allinfo_zongjia em").text($.cookie('goodsNumber') * $.cookie('goodsprice'));
                $(".h_allinfo_jianshu span").text($.cookie('goodsNumber'));
                $(".sshopcar_amout").text($.cookie("goodsNumber"));
                $('.goods-number').text($.cookie('goodsNumber'));
            }
            if ($(".h_allinfo_zongjia em").text() >= 200) {
                $(".reduce").show();
            } else {
                $(".reduce").hide();
            }
        })
        if (parseInt($(".h_allinfo_zongjia em").text()) >= 200) {
            $(".reduce").show();
        } else {
            $(".reduce").hide();
        }


        del();
        function del() {
            $(".header_ginfo_del").each(function (i) {
                $(".header_ginfo_del").eq(i).click(function () {
                    $.cookie('goodsNumber', '0', {path: '/', expires: 9999});
                    $.cookie('goodsname', '', {path: '/', expires: 9999});
                    $.cookie('goodsprice', '', {path: '/', expires: 9999});
                    $.cookie('goodsimg', '', {path: '/', expires: 9999});
                    $.cookie('jine', '', {path: '/', expires: 9999});
                    $.cookie('jifen', '', {path: '/', expires: 9999});
                    $('.shopgoods .shopgoods_empty').show();
                    $('.nav_content .shopgoods_empty').show();
                    $(".shopgoods .shopgoods_incar").hide();
                    $(".nav_content .shopgoods_incar").hide();
                    $(".sshopcar_amout").text(0);
                    $(".goods-number").text(0);
                    location.href=""
                })
            });
        }


        //右侧隐藏的购物车 点击 - + 数量会变化
        $('.h_amout_up1').click(function () {
            rrr = $('.h_amout_up1').index($(this));
            var yyy = parseInt($(".yin_car").eq(rrr).val()) + 1;
            for (var i = 0; i < $(".h_amout_up1").length; i++) {
                $('.yin_car').eq(i).val(yyy);
            }
            $(".sshopcar_amout").text($('.yin_car').eq(rrr).val());
            $('.goods-number').text($('.yin_car').eq(rrr).val());
            $.cookie('goodsNumber', $('.sshopcar_amout').text(), {path: '/', expires: 9999});
            $(".h_allinfo_zongjia em").text($.cookie('goodsNumber') * $.cookie('goodsprice'));
            $(".h_allinfo_jianshu span").text($.cookie('goodsNumber'));
            if (parseInt($(".h_allinfo_zongjia em").text()) >= 200) {
                $(".reduce").show();
            }
        })
        $('.h_amout_down1').click(function () {
            var yyy = parseInt($(".yin_car").eq(rrr).val()) - 1;
            if (yyy < 1) {
                yyy = 1;
            }
            for (var i = 0; i < $(".h_amout_up1").length; i++) {
                $('.yin_car').eq(i).val(yyy);
            }
            $(".sshopcar_amout").text($('.yin_car').eq(rrr).val());
            $('.goods-number').text($('.yin_car').eq(rrr).val());

            $.cookie('goodsNumber', $('.sshopcar_amout').text(), {path: '/', expires: 9999});
            $(".h_allinfo_zongjia em").text($.cookie('goodsNumber') * $.cookie('goodsprice'));
            $(".h_allinfo_jianshu span").text($.cookie('goodsNumber'));
            if (parseInt($(".h_allinfo_zongjia em").text()) < 200) {
                $(".reduce").hide();
            }

        });


        //$('.put-cart').click(function(){
        //    if($.cookie('goodsNumber')==undefined){
        //        num=0;
        //    }else {
        //        num=$.cookie('goodsNumber')
        //    }
        //    num++;
        //    $('.goods-number').text(num);
        //    $('.sshopcar_amout').text(num);
        //    $.cookie('goodsNumber',$('.goods-number').text(),{path:'/',expires:9999})
        //    $('.goods-number').css({display:'block'});
        //})                          //主页 和列表页中的那些
        //
        //if ($('.goods-number').text()<=0){
        //    $('.goods-number').css({display:'none'});
        //}else {
        //    $('.goods-number').css({display:'block'});    //右上角 我的购物车 当数量<0的时候，不显示
        //}

        //详情页中 点击 - + 数量会变化
        var nnn = $('#buy_number').val();
        $('.h_amout_up').click(function () {
            nnn++;
            $('#buy_number').val(nnn);
        })
        $('.h_amout_down').click(function () {
            nnn--;
            if (nnn < 0) {
                nnn = 0;
            }
            $('#buy_number').val(nnn);
        })

        ////详情页中的加入购物车  (下面的4个)
        //$('.add_num').click(function(){
        //    if($.cookie('goodsNumber')==undefined){
        //        num=0;
        //    }else {
        //        num=$.cookie('goodsNumber')
        //    }
        //    num++;
        //    $('.sshopcar_amout').text(num);
        //    $.cookie('goodsNumber',$('.sshopcar_amout').text(),{path:'/',expires:9999});
        //})


        setTimeout(function () {
            $('.tanchu').animate({opacity: 1}, 300);
        }, 10000);
        $('.tanchu .close').click(function () {
            $('.tanchu').animate({opacity: 0}, 300);
        })               //弹出的小广告

    })
})(jQuery)