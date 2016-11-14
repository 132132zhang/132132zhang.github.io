/**
 * Created by Administrator on 2016/10/29.
 */
window.onload=function(){

    if (localStorage.getItem("image")==null){//当最初没有数据的时候，用空数组来表示存放的数据
        var arrImage=[];
        var arrIndrouce=[];
        var arrPrice=[];
        var arrNumber=[];
    }else{      //当最初有数据的时候，把存放的数据放进数组里面
        var arrImage=localStorage.getItem("image").split(",");
        var arrIndrouce=localStorage.getItem("indrouce").split(",");
        var arrPrice=localStorage.getItem("price").split(",");
        var arrNumber=localStorage.getItem("number").split(",");

        $("#box1").hide();
        $("#box8").show();

    }
    //点击 当前的加入购物车按钮
    $(".add-car").click(function(){
        var index=$(".add-car").index(this);
        var bBtn=true;
        if (arrImage.length<1){
            arrImage.push($(".good-image img").eq(index).attr('src'));
            arrIndrouce.push($(".good-indrouce").eq(index).text());
            arrPrice.push($(".single_price").eq(index).text());
            arrNumber.push(1);
        }else {
            for (var i=0;i<arrImage.length;i++){
                if (arrImage[i]==$(".good-image img").eq(index).attr('src')){   //当数据中已经有了此件商品时候，让商品数量+1
                    bBtn=false;     //当开关为false时，只给对应的那个数值加1
                    arrNumber[i]=parseInt(arrNumber[i])+1;
                }
            }
            if (bBtn==true){//当数据中没有此件商品时候，让商品数量为 1
                arrImage.push($(".good-image img").eq(index).attr('src'));
                arrIndrouce.push($(".good-indrouce").eq(index).text());
                arrPrice.push($(".single_price").eq(index).text());
                arrNumber.push(1);
            }
        }

        localStorage.setItem("image",arrImage);
        localStorage.setItem("indrouce",arrIndrouce);
        localStorage.setItem("price",arrPrice);
        localStorage.setItem("number",arrNumber);
    });
    var count=0;
    for (var j=0;j<arrImage.length;j++){
        count+=parseInt(arrNumber[j]);    //总数量
        $("#box8").append('<div class="a1"><img class="imgs" src="' +
            arrImage[j] +
            '"><div class="list"><p class="mingzi">' +
            arrIndrouce[j] +
            '</p><p>单价：<em>￥</em><em>' +
            arrPrice[j] +
            '</em></p><p class="pp"><span>数量：</span>' +
            '<a class="jian" href="javascript:;"> - </a><input class="goods_num" type="text" value="' +
            arrNumber[j] +
            '"><a class="add" href="javascript:;"> + </a></p></div><div class="size size2">L</div>' +
            '<img class="del" src="../img/del.png"></div>')
    };
        
        


    //购物车加减
    $(".add").click(function(){
    	var index=$(".add").index(this);
    	var num=$(this).prev().val();	//当前被点击的“+” 的前一个input的值
    	num++;
    	$(this).prev().val(num);	//让当前的input改变
    	arrNumber[index]=num;	//当前对应商品的对应数量做出改变
    	localStorage.setItem("number",arrNumber);	//重新保存当前商品的数量
	  	zong();
    })
    
    //购物车商品数量的减少
    $(".jian").click(function(){
    	var index=$(".jian").index(this);
    	var num=$(this).next().val();
    	num--;
    	if(num<1){
    		num=1;	//不能让当前商品的数量小于1
    	}
    	$(this).next().val(num);
    	arrNumber[index]=num;
    	localStorage.setItem("number",arrNumber);
	    zong();
    })
    zong();
    
    //刪除购物车的商品
    $(".del").click(function(){
    	var index=$(".del").index(this);
    	$(this).parent().css({display:"none"});
    	if($(".imgs").eq(index).attr("src")==arrImage[index]){
    		arrImage.splice(index,1);
    		arrIndrouce.splice(index,1);
    		arrPrice.splice(index,1);
    		arrNumber.splice(index,1);

    	localStorage.setItem("image",arrImage);
        localStorage.setItem("indrouce",arrIndrouce);
        localStorage.setItem("price",arrPrice);
        localStorage.setItem("number",arrNumber);
    	}
    	zong();
    })
    

	function zong(){
		var pay=0;
	    var num_zong=0;
	    for(var m=0;m<arrNumber.length;m++){
	    	num_zong+=parseInt(arrNumber[m]);
	    	pay+=arrNumber[m]*arrPrice[m];
	    }
	    $(".count").text(num_zong);	//购物车商品的总数量
	    $(".pay_price").text(pay);  //需要支付的总价钱
	}

};