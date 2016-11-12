/**
 * Created by Administrator on 2016/9/27.
 */
(function($){
    $(function(){
        if ($.cookie("goodsname")==undefined|| $.cookie("goodsname")==""){
            $('.cb_title_h2 .car_empty').show();
            $(".cb_title_h2 .shopping_car").hide();
        }else {
            $('.cb_title_h2 .car_empty').hide();
            $(".cb_title_h2 .shopping_car").show();

            $('.buybuy').append("<ul><li><a class='a_img' href='yayang.html'><img src=" +
                $.cookie('goodsimg') +
                "></a><p class='p1'>" +
                $.cookie('goodsname') +
                "</p><p class='p2'>￥<span>" +
                $.cookie('goodsprice') +
                "</span></p><p class='p3'><span class='decrease_num h_amout_down'></span>" +
                "<input class='item-buy-quantity-input' id='buying' value='" +
                $.cookie('goodsNumber') +
                "'><span class='increase_num h_amout_up'></span>" +
                "</p><p class='p4 p7'>" +
                $.cookie('goodsNumber')*$.cookie('goodsprice') +".00"+
                "</p><p class='p5'>" +
                $.cookie('goodsNumber')*$.cookie('goodsprice') +
                "</p><p class='p6'><a class='item-buy-delete' href='javascript:;'>删除</a>" +
                "<a href='javascript:;' class='p_favorite'>收藏</a></p></li>" +
                "<li class='reduce' style=' display:none'><a class='a_img' href='javascript:;'><img src='" +
                "../img/coupon.jpg" +
                "'></a> <p class='p1'><em>[满赠]</em>国庆超神券299-100</p>" +
                "<p class='p2'>￥<span>0.00</span></p><p class='p3'>" +
                "<span class='decrease_num1'></span>" +
                "<input class='item-buy-quantity-input' value='1'>" +
                "<span class='increase_num1'></span></p>" +
                "<p class='p7'>￥0.00</p></li></ul>"+
                "<div class='mycart_allinfo_show'><div class='myallinfo_show_one'>"+
                "<p class='myallinfo_delbtn' style='margin-right: 20px'><a href='javascript:;'>全部清空</a></p>"+
                "<p class='myallinfo_gobuybtn'><a href='足球.html'>继续购物</a></p>"+
                "</div><div class='myallinfo_show_two'><p class='myallinfo_allamount'>共<i>"+
                $.cookie('goodsNumber')+
                "</i>件商品</p><p class='myallinfo_allpay'><span>应付金额（不含运费）：</span><i>￥</i><em>"+
                $.cookie('goodsNumber')*$.cookie('goodsprice') +".00"+
                "</em></p><p class='myallinfo_gopaybtn'><a href='dingdan.html'>去结算</a>" +
                "</p></div></div>"
            )
            if(parseInt($(".myallinfo_allpay em").text())>=200){
                $(".reduce").show();
            }

            $('.increase_num').click(function(){
                var yyy=parseInt($("#buying").val())+1;
                $('#buying').val(yyy);
                $(".sshopcar_amout").text($('#buying').val(yyy));
                $('.goods-number').text($('#buying').val(yyy));
                $.cookie("goodsNumber",$("#buying").val(),{path:'/',expires:9999});
                $.cookie('jine',$('.p4').text(),{path:'/',expires:9999});
                $.cookie('jifen',$('.p5').text(),{path:'/',expires:9999});
                $(".p4").text($.cookie('goodsNumber')*$.cookie('goodsprice'));
                $(".p5").text($.cookie('goodsNumber')*$.cookie('goodsprice'));
                $(".myallinfo_allamount i").text($.cookie('goodsNumber'));
                $(".myallinfo_allpay em").text($.cookie('goodsNumber')*$.cookie('goodsprice')+".00");
                if(parseInt($(".myallinfo_allpay em").text())>=200){
                    $(".reduce").show();
                }
            })


            $('.decrease_num').click(function(){
                var yyy=parseInt($("#buying").val())-1;
                if(yyy<1){
                    yyy=1;
                }
                $(".sshopcar_amout").text($('#buying').val(yyy));
                $('.goods-number').text($('#buying').val(yyy));
                $.cookie("goodsNumber",$("#buying").val(),{path:'/',expires:9999});
                $.cookie('jine',$('.p4').text(),{path:'/',expires:9999});
                $.cookie('jifen',$('.p5').text(),{path:'/',expires:9999});
                $(".p4").text($.cookie('goodsNumber')*$.cookie('goodsprice'));
                $(".p5").text($.cookie('goodsNumber')*$.cookie('goodsprice'));
                $(".myallinfo_allamount i").text($.cookie('goodsNumber'));
                $(".myallinfo_allpay em").text($.cookie('goodsNumber')*$.cookie('goodsprice')+".00");
                if(parseInt($(".myallinfo_allpay em").text())<200){
                    $(".reduce").hide();
                }
            });                 //详情页中的那个
        }
            //点击全部清空
        $(".myallinfo_delbtn").click(function(){
            alert("您确定要清空购物车吗？");
            $.cookie('goodsNumber','0',{path:'/',expires:9999});
            $.cookie('goodsname','',{path:'/',expires:9999});
            $.cookie('goodsprice','',{path:'/',expires:9999});
            $.cookie('goodsimg','',{path:'/',expires:9999});
            $.cookie('jine','',{path:'/',expires:9999});
            $.cookie('jifen','',{path:'/',expires:9999});
            $('.cb_title_h2 .car_empty').show();
            $(".cb_title_h2 .shopping_car").hide();
        })
        $(".item-buy-delete").click(function(){
            $.cookie('goodsNumber','0',{path:'/',expires:9999});
            $.cookie('goodsname','',{path:'/',expires:9999});
            $.cookie('goodsprice','',{path:'/',expires:9999});
            $.cookie('goodsimg','',{path:'/',expires:9999});
            $.cookie('jine','',{path:'/',expires:9999});
            $.cookie('jifen','',{path:'/',expires:9999});
            $('.cb_title_h2 .car_empty').show();
            $(".cb_title_h2 .shopping_car").hide();
        })





        $('.purchase_list_nav li').mouseenter(function(){
            var mn=$(this).index();
            $('.purchase_list_nav li').removeClass('pln_current').eq(mn).addClass('pln_current');
            $('.purchase_cont_page').removeClass('show_time').eq(mn).addClass('show_time');
        })      //加价购


    })
})(jQuery)



