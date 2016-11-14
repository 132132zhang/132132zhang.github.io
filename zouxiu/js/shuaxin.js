$(function(){
	// 添加上拉加载，下拉刷新
	
	
	var
		oScrollContainer = null,
		oScrollList = null,
		oScroll   = null,
		oPullDown = null,
		oPullUp   = null;

	setTimeout(function () {
		oScrollContainer = $('#scroll-container'),
		oScrollList = $('#scroll-list'),
		oPullDown = $('#pull-down');
		oPullUp = $('#pull-up');

		oScroll = new iScroll('scroll-container', {
			hScrollbar: false,	//是否显示水平滚动条
			vScrollbar: false,
			topOffset: oPullDown.height(),	//已经滚动的基准值
			onScrollMove: function (){
				if(this.y > 5 && !oPullDown.hasClass('active')) {	//y为滚动垂直位置
					oPullDown.addClass('active').html('松开手刷新页面！');
					this.minScrollY = 0;	//‘松开手刷新页面’距离上面的距离
				} else if(this.y < 5 && oPullDown.hasClass('active')) {
					oPullDown.removeClass('active').html('下拉刷新！');
					this.minScrollY = - oPullDown.height();
				}
//				else if(this.y < this.maxScrollY && !oPullUp.hasClass('active')) {
//					oPullUp.addClass('active').html('松开手加载数据！');
//				} else if(this.y >=this.maxScrollY && oPullUp.hasClass('active')) {
//					oPullUp.removeClass('active').html('上拉加载！');
//				}
			},
			onScrollEnd:function () {
				if(oPullDown.hasClass('active')) {
					oPullDown.html('Loading....');
					pullDownData();
				} else if(oPullUp.hasClass('active')) {
					oPullUp.html('Loading....');
					pullUpData();
				}
			},
			onRefresh: function (){
				if(oPullDown.hasClass('active')) {
					oPullDown.removeClass('active').html('下拉刷新！');
				} else if(oPullUp.hasClass('active')) {
					oPullUp.removeClass('active').html('上拉加载！');
				}
			},
		});
//		setTimeout(function () {
//			oScrollContainer.css({left: 0});
//		}, 300);
	}, 100);
	
	var page=0;
	// 下拉刷新新的数据
	function pullDownData() {
//		page++;
		$.ajax({
			url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
			dataType: 'jsonp',
			data:{
				pageCode:0,
			},
			success: function (data) {
				for(var i=0;i<data.length;i++){
		    		$(".goods_lists").prepend('<div class="good"><div class="good-image">'+
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
				oScroll.refresh();
			}
		});
	}

	// 上拉加载新的数据
	function pullUpData() {
//		page++;
		$.ajax({
			url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
			dataType: 'jsonp',
			data:{
				pageCode:0,
			},
			success: function (data) {
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
				oScroll.refresh();
			}
		});
	}
	
	
	
	
	
	
})