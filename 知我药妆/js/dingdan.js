/**
 * Created by Administrator on 2016/9/28.
 */
$(function(){
    $(".paymore_btn").click(function(){
        $(".paymore_btn").hide();
        $(".payonline_terrace").show();
    })          //点击 更多支付方式的时候

    $(".payonline_way dd").click(function(){
        $(".payonline_way dd").removeClass("paycfm_itemtotle");
        $(this).addClass("paycfm_itemtotle");;
    })          //点击每一种支付方式的时候，支付logo 的样式改变

    $(".paycfm_payyouhui .paycfm_yhwaytitle").click(function(){
        var n=$(".paycfm_payyouhui .paycfm_yhwaytitle").index($(this));
        $(this).addClass("current");
        $(".paycfm_payyouhui .hide").eq(n).addClass("show");
    })        //点击'使用知我眼妆优惠券'时候

    $(".paycfm_payyouhui .current").click(function() {
        var n = $(".paycfm_payyouhui .current").index($(this));
        $(".paycfm_payyouhui .show").eq(n).removeClass("show");
    })


    if ($.cookie("goodsname")==undefined|| $.cookie("goodsname")==""){

    }else {
        $(".paypro_table").append("<tr class='xiang_qing'><td class='paytable_namecont'>"+
            "<a class='a1' href='javascript:;'><img width='68px' height='68px' src=" +
            $.cookie('goodsimg')+
            "></a><a class='a2' href='javascript:;'>" +
            $.cookie('goodsname') +
            "</a></td><td class='paytable_pricecont'>￥" +
            $.cookie('goodsprice') +
            "</td> <td class='paytable_amonutcont'>" +
            $.cookie('goodsNumber')+
            "</td><td class='paytable_totlecont'>￥" +
            $.cookie('goodsNumber')*$.cookie('goodsprice') +
            ".00</td></tr>")

        $("#total_amount").text($.cookie('goodsNumber')*$.cookie('goodsprice'));
        $(".need_pay").text($.cookie('goodsNumber')*$.cookie('goodsprice')+5+".00");
    }




})