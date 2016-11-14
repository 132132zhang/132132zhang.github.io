/**
 * Created by Administrator on 2016/10/29.
 */
$(function(){
    var search=$("#search");
    var list=$("#list");
    search.bind("input",function(){
        if(search.val()!=""){}
		$.ajax({
			dataType:"jsonp",
			url:"http://datainfo.duapp.com/shopdata/selectGoodes.php",
			data:{
				selectText:search.val()
			},
			success:function(data){
				$("#list li").remove();   //每次输入时清空ul中的 li
                for (var i=0;i<data.length;i++){
                    list.append("<li><a href='javascript:;'>"+data[i].goodsName+"</a></li>");//在ul中添加li                };
				}
            },
		});
		
    });
    var index=-1;
    search.keydown(function(event){ //  键盘事件
        if (event.keyCode==40){     //下箭头
            index++;
            if (index>$("#list li").length-1){
                index=0;
            }
            $("#list li").removeClass("active").eq(index).addClass("active");
            search.val($("#list li").eq(index).text());
        }
        if (event.keyCode==38){     //上箭头
            index--;
            if (index<0){
                index=$("#list li").length-1;
            }
            $("#list li").removeClass("active").eq(index).addClass("active");
            search.val($("#list li").eq(index).text());
            return false;
        }
        if (event.keyCode==13){     //回车
            list.css({display:"none"})
        }
    });
    search.focus(function(){    //搜索框的事件
        list.css({display:"block"})
    });
    search.blur(function(){
        list.css({display:"none"})
    });
    
    
    //首页商品
    $.ajax({
		dataType:"jsonp",
		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		success:function(data){
			for(var i=0;i<data.length;i++){
	    		$(".goods_lists").append('<div class="good"><div class="good-image">'+
	    		'<img src="'+
	    		data[i].goodsListImg+
	    		'"></div><div class="good-list"><p class="good-indrouce">'+
	   			data[i].goodsName+
	    		'</p><p class="price"><strong class="now-price">￥</strong><strong class="now-price single_price">'+
	    		data[i].price+
	    		'</strong><del>￥</del><del class="ago-price">'+
	    		'198'+
	    		'</del></p><p class="discount">'+
	    		data[i].discount+
	    		'折</p><a href="javascript:;" class="add-car"></a></div></div>')
	    	}
		}
	})
    
    
})

	
	






