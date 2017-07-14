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
		$("#all").css("display","none");
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
		$("#all").css("display","none");
		$("#shoot").css("display","block");
		$("#painting").css("display","none");
		$("#print").css("display","none");
	}
	function cost1(){
		$(".cost1 span").css("color","black");
		var span=$(".cost1 span").text();
		if (span=="▼") {
			$(".cost1 span").text("▲");
			$("#all").css("display","none");
			$("#sculpture").css("display","block");
			$("#shoot").css("display","none");
			$("#painting").css("display","none");
			$("#print").css("display","none");
		}
		if (span=="▲") {
			$(".cost1 span").text("▼");
			$("#all").css("display","none");
			$("#sculpture").css("display","none");
			$("#shoot").css("display","block");
			$("#painting").css("display","none");
			$("#print").css("display","none");
		}
	}

	function biserial(){
		var img = $(".biserial").css("background-image");
		// console.log(img);
		// console.log(img.split("/",6)[5]);
		var img1=img.split("/",6)[5];
		// console.log(img1.split('"',3)[0]);
		var url=img1.split('"',3)[0];
		if (url == "multi_active.svg") {
			$(".biserial").css("background-image","url(../images/multi_column.svg)");
			$(".single_row").css("background-image","url(../images/single_active.svg)");
			$("#all").css("display","none");
			$("#page").css("display","block");
			$("#painting").css("display","none");
			$("#print").css("display","none ");
			$("#chinese").css("display","none");
			$("#sculpture").css("display","none");
			$("#shoot").css("display","none");
			$("#else").css("display","none");
			$("#water").css("display","none");
		}
		if (url == "multi_column.svg") {
			$(".biserial").css("background-image","url(../images/multi_active.svg)");
			$(".single_row").css("background-image","url(../images/single_column.svg)");
			$("#all").css("display","block");
			$("#page").css("display","none");
			$("#painting").css("display","none");
			$("#print").css("display","none ");
			$("#chinese").css("display","none");
			$("#sculpture").css("display","none");
			$("#shoot").css("display","none");
			$("#else").css("display","none");
			$("#water").css("display","none");
		} 
	}
	function single_row(){
		var img = $(".single_row").css("background-image");
		// console.log(img);
		// console.log(img.split("/",6)[5]);
		var img1=img.split("/",6)[5];
		// console.log(img1.split('"',3)[0]);
		var url=img1.split('"',3)[0];
		if (url == "single_column.svg") {
			$(".biserial").css("background-image","url(../images/multi_column.svg)");
			$(".single_row").css("background-image","url(../images/single_active.svg)");
			$("#all").css("display","none");
			$("#page").css("display","block");
			$("#print").css("display","none ");
			$("#chinese").css("display","none");
			$("#sculpture").css("display","none");
			$("#shoot").css("display","none");
			$("#else").css("display","none");
			$("#water").css("display","none");
		}
		if (url == "single_active.svg") {
			$(".biserial").css("background-image","url(../images/multi_active.svg)");
			$(".single_row").css("background-image","url(../images/single_column.svg)");
			$("#all").css("display","block");
			$("#page").css("display","none");
			$("#painting").css("display","none");
			$("#print").css("display","none ");
			$("#chinese").css("display","none");
			$("#sculpture").css("display","none");
			$("#shoot").css("display","none");
			$("#else").css("display","none");
			$("#water").css("display","none");
		}
	}


	//图片选择
	//
		//全部
	function alls(){
		$("#all").css("display","block");
		$("#painting").css("display","none");
		$("#print").css("display","none ");
		$("#chinese").css("display","none");
		$("#sculpture").css("display","none");
		$("#shoot").css("display","none");
		$("#else").css("display","none");
		$("#water").css("display","none");
	}
	//油画
	function painting(){
		$("#all").css("display","none");
		$("#painting").css("display","block");
		$("#print").css("display","none ");
		$("#chinese").css("display","none");
		$("#sculpture").css("display","none");
		$("#shoot").css("display","none");
		$("#else").css("display","none");
		$("#water").css("display","none");
	}
	//版画
	 function print(){
		$("#all").css("display","none");
		$("#painting").css("display","none");
		$("#print").css("display","block ");
		$("#chinese").css("display","none");
		$("#sculpture").css("display","none");
		$("#shoot").css("display","none");
		$("#else").css("display","none");
		$("#water").css("display","none");
	}
	//水墨
	function chinese(){
		$("#all").css("display","none");
		$("#painting").css("display","none");
		$("#print").css("display","none ");
		$("#chinese").css("display","block");
		$("#sculpture").css("display","none");
		$("#shoot").css("display","none");
		$("#else").css("display","none");
		$("#water").css("display","none");
	}
	//水彩(粉)
	function water(){
		$("#water").css("display","block");
		$("#all").css("display","none");
		$("#painting").css("display","none");
		$("#print").css("display","none ");
		$("#chinese").css("display","none");
		$("#sculpture").css("display","none");
		$("#shoot").css("display","none");
		$("#else").css("display","none");
	}
	//雕塑
	function sculpture(){
		$("#all").css("display","none");
		$("#painting").css("display","none");
		$("#print").css("display","none ");
		$("#chinese").css("display","none");
		$("#sculpture").css("display","block");
		$("#shoot").css("display","none");
		$("#else").css("display","none");
		$("#water").css("display","none");
	}
	//摄影
	function shoot(){
		$("#all").css("display","none");
		$("#painting").css("display","none");
		$("#print").css("display","none ");
		$("#chinese").css("display","none");
		$("#sculpture").css("display","none");
		$("#shoot").css("display","block");
		$("#else").css("display","none");
		$("#water").css("display","none");
	}
	//其他
	function elses(){
		$("#all").css("display","none");
		$("#painting").css("display","none");
		$("#print").css("display","none ");
		$("#chinese").css("display","none");
		$("#sculpture").css("display","none");
		$("#shoot").css("display","none");
		$("#else").css("display","block");
		$("#water").css("display","none");
	}