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
	})	
	
		//底部点击事件
	$(document).ready(function(){
 		 $(".menu").click(function(){
 		 	$(".menu").css("display","none");
			$(".menu1").css("display","inline");
   		 	$(".ys_footer2").animate({bottom:'10%'});
 		});
	});
	$(document).ready(function(){
 		$(".menu1").click(function(){
 		 	$(".menu1").css("display","none");
			$(".menu").css("display","inline");
   		 	$(".ys_footer2").animate({bottom:'-35%'});
  		});
	});


//选择点击
	$(document).ready(function(){
		function clickMenu (menus, menuClassName) {
			menus.on('click', function(){
				$.each(menus, function () {
					$(this).removeClass(menuClassName);
				})
				$(this).addClass(menuClassName);
			})
		}
		var $mainMenuSpan  = $(".select button");
		clickMenu($mainMenuSpan,'show-bottomBo');

	})
		