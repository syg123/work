/**
 * Created by lenovo on 2016/12/10.
 */
var mySwiper = new Swiper("#swiper-container",{
    onSlideChangeStart : function() {
        $("#title .active").removeClass('active');
        $("#title li").eq(mySwiper.activeIndex).addClass('active');
    }
});
$("#title").on('touchstart',"li", function(e) {
    e.preventDefault()
    $("#title .active").removeClass('active');
    $(this).addClass('active');
    mySwiper.slideTo($(this).index());
});
var homeSwiper = new Swiper("#swiper-main",{
    onSlideChangeStart : function() {
        $("#nav .active").removeClass('active');
        $("#nav li").eq(homeSwiper.activeIndex).addClass('active');
    }
});
$("#nav li:first").addClass("active")
$("#nav").on('touchstart',"li", function(e) {
    e.preventDefault()
    $("#nav .active").removeClass('active');
    $(this).addClass('active');
    homeSwiper.slideTo($(this).index());
});
