// 首页大图轮播js
$(function () {
    var scroll = new zScroll({
        container:'#banner-swiper',
        autoplay:true
    })
});

// 悬浮隐藏banner上的阴影
$('.banner-nav a img').hover(function (){
    $(this).css('box-shadow','none');
},function (){
    $(this).css('box-shadow','3px 7px 12px #a4c1de');
})