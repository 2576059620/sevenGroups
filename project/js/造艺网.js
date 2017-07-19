
		//上部点击事件
		$(document).ready(function(){
			$(".ys_img1").click(function(){
				$('.ys_input1').css('display', 'none');
				$(".ys_input2").css("display","none");
				$(".ys_input3").css("display","inline");
				$(".ys_img1").css("display","none");
				$(".ys_imgx").css("display","inline");
				$(".ys_a").css("display","none");
				
				
			})
			$(".ys_imgx").click(function(){
				$('.ys_input1').css('display', 'inline');
				$(".ys_input2").css("display","inline");
				$(".ys_input3").css("display","none"); 
				$(".ys_img1").css("display","inline");
				$(".ys_imgx").css("display","none");
				$(".ys_a").css("display","inline");
				
				
			})
		}); 
		//底部点击事件
		$(document).ready(function () {
			$(".menu").click(function(){
				var menu = $(".menu_span2").text()
				if (menu == "▲") {
					$(".ys_footer2").animate({"bottom":'50px',"z-index":"-1000"});
					$(".menu_span2").text("▼")
				}
				if (menu == "▼") {
					$(".ys_footer2").animate({"bottom":'-300px',"z-index":"-1000"});
					$(".menu_span2").text("▲")
				}
			})
		})

		// 滑动
		var swiper = new Swiper('.swiper-container');
				// 点击三个图片事件
		$(document).ready(function(){
			$(".worke1").click(function(){
				$(".top1").css("display","inline");
				$(".top2").css("display","none");
				$(".top3").css("display","none");
			})
			$(".worke2").click(function(){
				$(".top1").css("display","none");
				$(".top2").css("display","inline");
				$(".top3").css("display","none");
			})
			$(".worke3").click(function(){
				$(".top1").css("display","none");
				$(".top2").css("display","none");
				$(".top3").css("display","inline");
			})
		})
		// 下边图片自动变换
		// 默认第一张图片
		var flag = true;   		
		var timer = setInterval(function () {
			$('.frame').animate({opacity:0},500,function(){
				if (flag) {
				$('.frame').attr('src',"../images/bottom_zhengshu.jpg");
				flag = false;

			}else{
				$('.frame').attr('src',"../images/bottom_frame.jpg");
				flag = true;
			}
        	$('.frame').animate({opacity:1},500);
			});		
    }, 3000);

		// footer底部
		//sectiond底部footer点击事件
function help1() {
	var help = $(".help1 span").text();
	if (help =="+") {
		$(".display1").css("display","block");
		$(".help1 span").text("×");
		$(".help1").css("font-weight","bolder");
	}
	if (help =="×"){
		$(".display1").css("display","none");
		$(".help1 span").text("+");
		$(".help1").css("font-weight","");
	}
		
}
function help2() {
	var help = $(".help2 span").text();
	if (help =="+") {
		$(".display2").css("display","block");
		$(".help2 span").text("×");
		$(".help2").css("font-weight","bolder");
	}
	if (help =="×"){
		$(".display2").css("display","none");
		$(".help2 span").text("+");
		$(".help2").css("font-weight","");
	}
		
}
function help3() {
	var help = $(".help3 span").text();
	if (help =="+") {
		$(".display3").css("display","block");
		$(".help3 span").text("×");
		$(".help3").css("font-weight","bolder");
	}
	if (help =="×"){
		$(".display3").css("display","none");
		$(".help3 span").text("+");
		$(".help3").css("font-weight","");
	}
		
}
function help4() {
	var help = $(".help4 span").text();
	if (help =="+") {
		$(".display4").css("display","block");
		$(".help4 span").text("×");
		$(".help4").css("font-weight","bolder");
		$(".help4").removeClass('box_buttom');
		$(".display4").addClass('box_buttom bottom');
	}
	if (help =="×"){
		$(".display4").css("display","none");
		$(".help4 span").text("+");
		$(".help4").css("font-weight","");
		$(".help4").addClass('box_buttom');
	}
		
}
