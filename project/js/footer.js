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
