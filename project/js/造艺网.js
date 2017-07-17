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