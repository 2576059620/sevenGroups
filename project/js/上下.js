//上部点击事件
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
			
//底部点击事件	
		})
		$(".menu").click(function(){
			$(".ys_footer2").css("top","67%");
			$(".menu").css("display","none");
			$(".menu1").css("display","inline");
			console.log("-=-=-=-=-=-=-=")
		})
		$(".menu1").click(function(){
			$(".ys_footer2").css("top","100%");
			$(".menu1").css("display","none");
			$(".menu").css("display","inline");
		})