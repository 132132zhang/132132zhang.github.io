/**
 * Created by mac on 2016/12/14.
 */
$(function () {

    var
        oBox		= $('#box'),
        aFlashImgLi = $('#flash-img-list li'),
        aFlashBtnA  = $('#flash-btn-list a'),
        oBtn	= $('#flash-direction-btn'),
        oLeftBtn	= $('#flash-left-btn'),
        oRightBtn	= $('#flash-right-btn'),
        iIndex		= 0,
        oTimer		= null;

    // 第一步给按钮列表添加click事件
    aFlashBtnA.click(function () {
        iIndex = $(this).index();
        aFlashImgLi.animate({opacity: 0,}, function () {
            $(this).css('display', 'none');
        });
        aFlashImgLi.eq(iIndex).css({display:'block'}).stop(true).animate({
            opacity: 1
        });

        // 改变按钮的class名称
        aFlashBtnA.removeClass('active').eq(iIndex).addClass('active');
    });

    // 给左侧按钮添加click事件
    oLeftBtn.click(function () {
        iIndex--;
        if(iIndex < 0) {
            iIndex = aFlashImgLi.length - 1;
        }

        aFlashImgLi.animate({
            opacity: 0,
        }, function () {
            $(this).css('display', 'none');
        });
        aFlashImgLi.eq(iIndex).css({display:'block'}).stop(true).animate({
            opacity: 1
        });

        // 改变按钮的class名称
        aFlashBtnA.removeClass('active').eq(iIndex).addClass('active');
    });

    // 给右侧按钮添加click事件
    oRightBtn.click(function () {
        iIndex++;
        if(iIndex === aFlashImgLi.length) {
            iIndex = 0;
        }
        aFlashImgLi.animate({
            opacity: 0,
        }, function () {
            $(this).css('display', 'none');
        });
        aFlashImgLi.eq(iIndex).css({display:'block'}).stop(true).animate({
            opacity: 1
        });

        // 改变按钮的class名称
        aFlashBtnA.removeClass('active').eq(iIndex).addClass('active');
    });

    // 自动轮播
    oTimer = setInterval(function () {
        iIndex++;
        if(iIndex === aFlashImgLi.length) {
            iIndex = 0;
        }
        aFlashImgLi.animate({
            opacity: 0,
        }, function () {
            $(this).css('display', 'none');
        });
        aFlashImgLi.eq(iIndex).css({display:'block'}).stop(true).animate({
            opacity: 1
        });

        // 改变按钮的class名称
        aFlashBtnA.removeClass('active').eq(iIndex).addClass('active');
    }, 3000);

    oBtn.mouseenter(function () {
        clearInterval(oTimer);
    });
    oBtn.mouseleave(function () {
        oTimer = setInterval(function () {
            iIndex++;
            if(iIndex === aFlashImgLi.length) {
                iIndex = 0;
            }
            aFlashImgLi.animate({
                opacity: 0,
            }, function () {
                $(this).css('display', 'none');
            });
            aFlashImgLi.eq(iIndex).css({display:'block'}).stop(true).animate({
                opacity: 1
            });

            // 改变按钮的class名称
            aFlashBtnA.removeClass('active').eq(iIndex).addClass('active');
        }, 3000);
    });
});