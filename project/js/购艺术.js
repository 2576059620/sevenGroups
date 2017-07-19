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
	function colour(ele){
		if ($(ele).hasClass('show-color')) {
			$(".color").removeClass('show-color');	
			$(ele).removeClass('show-color');
			$(".colors1").addClass('show-color');	
		}else{
			$(".colors1").removeClass('show-color1'); 
			$(".color").removeClass('show-color'); 
			$(ele).removeClass('show-color');
			$(ele).addClass('show-color');
		}
	}
	//形状选择
	function selectShape(ele,isStar){// isStar背景星图片
		if (isStar) {			//如果点击的是星 其他移除所以高亮属性
			$(".shape").removeClass('shape_highlight');	//移除
			if ($(ele).hasClass('star1')) {		//判断是否有某属性
				$(ele).removeClass('star1');	//如果没有则移除属性
			}else{
				$(ele).addClass('star1');	//如果没有则添加属性
			}
		}else{
			$(".star").removeClass('star1'); //如果没有则移除黑色星
			if ($(ele).hasClass('shape_highlight')) {	//判断如果有这个属性
				$(ele).removeClass('shape_highlight');	//则移除
			}else{
				$(".shape").removeClass('shape_highlight');//移除所有的
				$(ele).addClass('shape_highlight');	//	点击添加属性
			}
		}
	}
	//风格
	function style1(ele){
		if ($(ele).hasClass('show-style')) {	
			$(".style1").removeClass('show-style');	
			$(ele).removeClass('show-style');
			$(".all").addClass('show-style');	
		}else{
			$(".all").removeClass('show-style1');
			$(".style1").removeClass('show-style'); 
			$(ele).removeClass('show-style');
			$(ele).addClass('show-style');
		}
	}
	//题材
	function theme(ele){
		if ($(ele).hasClass('show-theme')) {	
			$(".themen2").removeClass('show-theme');	
			$(ele).removeClass('show-theme');
			$(".themen1").addClass('show-theme');	
		}else{
			$(".themen1").removeClass('show-theme1');
			$(".themen2").removeClass('show-theme'); 
			$(ele).removeClass('show-theme');
			$(ele).addClass('show-theme');
		}
	}

	//筛选
	function screen(){
		$(".screen").css("display","block");
		$(".screen").animate({"top":'0%'});
		$(".ys_boss").css("display","none");
	}
	// 返回事件
	function goBack(){
		$(".ys_boss").css("display","block");
		$(".screen").css("display","none");

	}

	//确定按钮
	function confirm(){
		$(".ys_boss").css("display","block");
		$(".screen").css("display","none");
	}

	//重置按钮
	function reset(){
		$(".complete").attr("selected","true");
		$(".complete").removeAttr("selected");
		$(".complete1").attr("selected","true");
		$(".complete1").removeAttr("selected");

		$(".colors1").addClass('show-color1');
		$(".color").removeClass('show-color');

		$(".all").addClass('show-style1');
		$(".style1").removeClass('show-style');

		$(".themen1").addClass('show-theme1');
		$(".themen2").removeClass('show-theme');

		$(".shape").removeClass('shape_highlight');
		$(".star1").addClass('star');
		$(".star").removeClass('star1');
	}