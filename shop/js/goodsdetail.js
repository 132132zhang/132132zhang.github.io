/**
 * Created by mac on 2017/2/19.
 */
$(function(){
//	点击出现的支付方式
    $(".payways").click(function(){
        $(".slowup").animate({"top":0},500);
    });
    $(".close").click(function(){
        $(".slowup").animate({"top":"100%"},500);
    });
//	点击出现的购物车
	$(".choose").click(function(){
        $(".addcarBox").animate({"top":0},500);
    });
    $(".close-icon").click(function(){
        $(".addcarBox").animate({"top":"100%"},500);
    });
    $(".addcar").click(function(){
        $(".addcarBox").animate({"top":0},500);
    });
    $(".gotoBuy").click(function(){
        $(".addcarBox").animate({"top":0},500);
    });


//是否收藏
    var Iscollect=false;
    $(".collect").click(function(){
        Iscollect=!Iscollect;
        if (Iscollect==true){
            $(".collect").addClass("collected");
        }else {
            $(".collect").removeClass("collected");
        }
    });
//选择商品分类 
$("#sku_ul .sku_li").click(function(){
	var index = $("#sku_ul .sku_li").index($(this));
	if($("#sku_ul a").eq(index).hasClass("current_sku")){
		$("#sku_ul a").removeClass("current_sku");
	}else{
		$("#sku_ul a").removeClass("current_sku");
		$("#sku_ul a").eq(index).addClass("current_sku");
	}
});

//商品数量的加减
	var num=$("#item_num").val();
	if(num<=1){
		$("#control_num_sub").addClass("disabled");
	}
	$("#control_num_sub").click(function(){
		num=$("#item_num").val();
		num--;
		if(num<=1){
			num=1;
			$("#control_num_sub").addClass("disabled");
		}
		$("#item_num").val(num);
	});
	$("#control_num_add").click(function(){
		num=$("#item_num").val();
		num++;
		if(num>1){
			$("#control_num_sub").removeClass("disabled");
		}
		$("#item_num").val(num);
	});
	$("#item_num").bind("input",function(){
		num=$("#item_num").val();
//		console.log(1)
		if(num<=1){
			num=1;
			$("#control_num_sub").addClass("disabled");
			$("#item_num").val(num);
		}
		if(num>1){
			$("#control_num_sub").removeClass("disabled");
		}
	})
	//点击确定
	var btn=true;
	$("#control_bottom_submit").click(function(){
		var aa=$("#sku_ul a").length;
		for(var a=0;a<aa;a++){
			if($("#sku_ul a").eq(a).hasClass("current_sku")){
				btn = false;
			}
		}
		if(btn){
				$(".pleasechoose").show();
				setTimeout(function(){
					$(".pleasechoose").hide();
				},2000)
				return false;
		}
	})
	
	
	
	
	
	
	
	
	
	
	
	
});