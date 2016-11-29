//渲染图片
$.getJSON("./json/data.json",function(data){
	var data=data.data.movie_data;
	for(var i=0;i<data.length;i++){
		$("<li class='swiper-slide' data-movie_id="+data[i].movie_id+"><img src="+data[i].movie_img_url+" ></li>").appendTo($(".wrapper"))
		$(".wrapper li:first").addClass("active");
		var num = $(".wrapper li:first").attr("data-movie_id");
	};
	//默认第一个的时间
	for(var j=0;j<data[0].days.length;j++){
		$("<li class='swiper-slide'>"+data[0].days[j].show_date+"</li>").appendTo($(".nav_ul"));
	}
	//点击图片
	var a=3571;
	$(".wrapper").on("tap","li",function(){
		var num=null;
		var ind =0;
		$(".box").html("");
		ind = $(this).index();
		num=$(this).attr("data-movie_id");
		$(".nav_ul").html("");
		for(var j=0;j<data[ind].days.length;j++){
			$("<li class='swiper-slide'>"+data[ind].days[j].show_date+"</li>").appendTo($(".nav_ul"));
		}
		information(num);
		informationTime("2016-10-25",num);
		a=num;
	});
	//点击时间
	$(".nav_ul").on("click","li",function(){
		$(".box").html("");
		$(this).addClass("time_bg").siblings().removeClass("time_bg");
		time=$(".time_bg").html();
		informationTime(time,a);
	});
	information(num);
	//渲染数据的函数
	function information(id){
		for(var i=0;i<data.length;i++){
			if(id==data[i].movie_id){
				$(".movie_name").html(data[i].movie_name);
				$(".movie_desc").html(data[i].movie_desc);
			}	
		}
		var nav_len=$(".nav_ul li").length;
		$(".nav_ul li").width(".95rem");
		$(".nav_ul li:first").addClass("time_bg");
	}
	function informationTime(time,id){
		var str="";
		for(var i=0;i<data.length;i++){
			if(id==data[i].movie_id){
				for(var j=0;j<data[i].shows[time].length;j++){
					var datat = data[i].shows[time][j];
					str +="<div class='particulars'>"
								+"<ul>"
								+"<li class='start_time'>"+datat.start_time+"</li>"
								+"<li><span class='end_time'>"+datat.end_time+"散场</span></li>"
								+"</ul><ul>"
								+"<li class='language'>"+datat.language+"</li>"
								+"<li><span class='hall_name'>"+datat.hall_name+"</span></li>"
								+"</ul><ul class='center' >"
								+"<li><i>￥"+datat.nonmember_price+"</i></li>"
								+"<li><em>会员：￥"+datat.member_price+"</em></li>"
								+"<li><span class='price'>影院价￥"+datat.price+"</span></li>"
								+"</ul><div class='btn'>"
								+"<p>选座购票</p>"
								+"</div></div>";
				}
			}
			
		}
		$(str).appendTo($(".box"));
	}
		
	informationTime("2016-10-25",num);
	
	
});




//图片轮播
var swiper=new Swiper(".pic",{
	 observer:true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents:true,//修改swiper的父元素时，自动初始化swiper
		freeMode:true,
		slidesPerView:'auto',//自适应显示几个li
		spaceBetween:10,//间距10像素
		onTap:function(a){
				//a.clickedIndex  当前点击的下标
		$(".wrapper li").eq(a.clickedIndex).addClass("active").siblings().removeClass("active");
		swiper.slideTo(a.clickedIndex,300);//默认走到当前点击的li
	}
})

var swiper1=new Swiper(".timenav",{
	 observer:true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents:true,//修改swiper的父元素时，自动初始化swiper
		freeMode:true,
		slidesPerView:'auto',//自适应显示几个li
		spaceBetween:10,//间距10像素
		onTap:function(a){
		//a.clickedIndex  当前点击的下标
		$(".nav_ul li").eq(a.clickedIndex).addClass("active").siblings().removeClass("active");
		swiper1.slideTo(a.clickedIndex,300);//默认走到当前点击的li
	}
});
function title(){
	console.log("这是20161128-film1-title分支上定义的方法")
};

