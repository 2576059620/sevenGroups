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
		clickMenu($mainMenuSpan,'bottomBo');
	})

//上架时间
	function time(){
		$(".time1").css("display","inline");
		$(".time1 span").css("color","black");
		$(".time").css("display","none");
		$(".cost1").css("display","none");
		$(".cost").css("display","inline");
		$(".container").css("display","none");
		$("#painting").css("display","block");
	}
	function time1(){
		$(".time1 span").css("color","black");
		var span=$(".time1 span").text();
		if (span=="▼") {
			$(".time1 span").text("▲");
			$("#all").css("display","none");
			$("#painting").css("display","none");
			$("#print").css("display","block ");
		}
		if (span=="▲") {
			$(".time1 span").text("▼");
			$("#all").css("display","none");
			$("#painting").css("display","block");
			$("#print").css("display","none");
		}
	}
//价格
	function cost(){
		$(".cost1").css("display","inline");
		$(".cost1 span").css("color","black");
		$(".cost").css("display","none");
		$(".time1").css("display","none");
		$(".time").css("display","inline");
		$(".container").css("display","none");
		$("#shoot").css("display","block");
	}
	function cost1(){
		$(".cost1 span").css("color","black");
		var span=$(".cost1 span").text();
		if (span=="▼") {
			$(".cost1 span").text("▲");
			$(".container").css("display","none");
			$("#sculpture").css("display","block");
		}
		if (span=="▲") {
			$(".cost1 span").text("▼");
			$(".container").css("display","none");
			$("#shoot").css("display","block");
		}
	}

//	来回切换
	var flag = true;	//当前页面
	function toggleView(){
		flag = !flag;		
		if (flag) {
			$(".biserial").addClass('biserial_highlight') 
			$(".single_row").removeClass('single_row_highlight');
			$("#all").css("display","block");
			$("container").css("display","none");
		}else{
			$(".single_row").addClass('single_row_highlight')
			$(".biserial").removeClass('biserial_highlight')
			$(".container").css("display","none");
			$("#page").css("display","block");
		}
	}

	//全部
	function alls(){
		$(".container").css("display","none");
		$("#all").css("display","block");
	}
	//油画
	function painting(){
		$(".container").css("display","none");
		$("#painting").css("display","block");
	}
	//版画
	 function print(){
		$(".container").css("display","none");
		$("#print").css("display","block ");
	}
	//水墨
	function chinese(){
		$(".container").css("display","none");
		$("#chinese").css("display","block");
	}
	//水彩(粉)
	function water(){
		$(".container").css("display","none");
		$("#water").css("display","block");
	}
	//雕塑
	function sculpture(){
		$(".container").css("display","none");
		$("#sculpture").css("display","block");
	}
	//摄影
	function shoot(){
		$(".container").css("display","none");
		$("#shoot").css("display","block");
	}
	//其他
	function elses(){
		$(".container").css("display","none");
		$("#else").css("display","block");
	}

	//	颜色选择
	$(document).ready(function(){
		function clickMenu (menus, menuClassName) {
			menus.on('click', function(){
				$.each(menus, function () {
					$(this).removeClass(menuClassName);
				})
				$(this).addClass(menuClassName);
			})
		}
		var $mainMenuSpan  = $(".colour td");
		clickMenu($mainMenuSpan,'show-color');
	})

	//形状选择
	// $(document).ready(function(){
	// 	function clickMenu (menus, menuClassName) {
	// 		menus.on('click', function(){
	// 			$.each(menus, function () {
	// 				$(this).removeClass(menuClassName);
	// 			})
	// 			$(this).addClass(menuClassName);
	// 		})
	// 	}
	// 	var $mainMenuSpan  = $(".shape div");
	// 	clickMenu($mainMenuSpan,'show-shape');
	// })
	//正方形
	var just1 = true;
	function just(){
		just1 = !just1;		
		if (!just1) {
			$(".just").addClass('just2');
			$(".just2").removeClass('just1');

			$(".long2").addClass('long1');
			$(".long1").removeClass('long2');

			$(".vertical2").addClass('vertical1');
			$(".vertical1").removeClass('vertical2');

			$(".circle2").addClass('circle1');
			$(".circle1").removeClass('circle2');

			$(".star1").addClass('star');
			$(".star").removeClass('star1');
		}else{
			$(".just2").addClass('just1');
			$(".just1").removeClass('just2');
		}
	}
	//长方形
	var long1 = true;
	function long(){
		long1 = !long1;		
		if (!long1) {
			$(".long").addClass('long2');
			$(".long2").removeClass('long1');

			$(".just2").addClass('just1');
			$(".just1").removeClass('just2');

			$(".vertical2").addClass('vertical1');
			$(".vertical1").removeClass('vertical2');

			$(".circle2").addClass('circle1');
			$(".circle1").removeClass('circle2');

			$(".star1").addClass('star');
			$(".star").removeClass('star1');
		}else{
			$(".long2").addClass('long1');
			$(".long1").removeClass('long2');
		}
	}
	//竖方形
	var vertical1 = true;
	function vertical(){
		vertical1 = !vertical1;		
		if (!vertical1) {
			$(".vertical").addClass('vertical2');
			$(".vertical2").removeClass('vertical1');

			$(".long2").addClass('long1');
			$(".long1").removeClass('long2');

			$(".just2").addClass('just1');
			$(".just1").removeClass('just2');

			$(".circle2").addClass('circle1');
			$(".circle1").removeClass('circle2');
			
			$(".star1").addClass('star');
			$(".star").removeClass('star1');
		}else{
			$(".vertical2").addClass('vertical1');
			$(".vertical1").removeClass('vertical2');
		}
	}
	//圆
	var circle1 = true;
	function circle(){
		circle1 = !circle1;		
		if (!circle1) {
			$(".circle").addClass('circle2');
			$(".circle2").removeClass('circle1');	

			$(".vertical2").addClass('vertical1');
			$(".vertical1").removeClass('vertical2');
				
			$(".long2").addClass('long1');
			$(".long1").removeClass('long2');

			$(".just2").addClass('just1');
			$(".just1").removeClass('just2');
			
			$(".star1").addClass('star');
			$(".star").removeClass('star1');
		}else{
			$(".circle2").addClass('circle1');
			$(".circle1").removeClass('circle2');
		}
	}
	//星
	var flag = true;
	function star(){
		flag = !flag;		
		if (flag) {
			$(".star1").addClass('star');
			$(".star").removeClass('star1');
		}else{
			$(".star").addClass('star1');
			$(".star1").removeClass('star');

			$(".circle2").addClass('circle1');
			$(".circle1").removeClass('circle2');	

			$(".vertical2").addClass('vertical1');
			$(".vertical1").removeClass('vertical2');
				
			$(".long2").addClass('long1');
			$(".long1").removeClass('long2');

			$(".just2").addClass('just1');
			$(".just1").removeClass('just2');
		}
	}

	//风格
	// $(document).ready(function(){
	// 	function clickMenu (menus, menuClassName) {
	// 		menus.on('click', function(){
	// 			$.each(menus, function () {
	// 				$(this).removeClass(menuClassName);
	// 			})
	// 			$(this).addClass(menuClassName);
	// 		})
	// 	}
	// 	var $mainMenuSpan  = $(".style td");
	// 	clickMenu($mainMenuSpan,'show-style');
	// })
	$(document).ready(function(){
		function clickMenu (menus, menuClassName) {
			menus.on('click', function(){
				$.each(menus, function () {
					$(this).removeClass(menuClassName);
				})
				$(this).addClass(menuClassName);
			})
		}
		var $mainMenuSpan  = $(".style td");
		clickMenu($mainMenuSpan,'show-style');
	})

	//题材
	$(document).ready(function(){
		function clickMenu (menus, menuClassName) {
			menus.on('click', function(){
				$.each(menus, function () {
					$(this).removeClass(menuClassName);
				})
				$(this).addClass(menuClassName);
			})
		}
		var $mainMenuSpan  = $(".theme td");
		clickMenu($mainMenuSpan,'show-theme');
	})

	// $(document).ready(function(){
	$scope.goBack = function(){
		//通过调用浏览器的返回事件，实现返回到主页的效果
		window.history.back();
	}

	// })