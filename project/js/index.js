function sort1(){
	var img = $(".sort>img").attr("src");
	console.log(img);
	if (img== "images/尖括号下.png") {
		$('.sort_display1').css({"display":"block","display":"flex"});
		$(".sort>img").attr("src","images/尖括号上.png");
	}
	if (img== "images/尖括号上.png") {
		$('.sort_display1').css("display","none");
		$(".sort>img").attr("src","images/尖括号下.png");
	}
}
function sort2(){
	var img = $(".sort>img").attr("src");
	console.log(img);
	if (img== "images/尖括号下.png") {
		$('.sort_display2').css({"display":"block","display":"flex"});
		$(".sort>img").attr("src","images/尖括号上.png");
	}
	if (img== "images/尖括号上.png") {
		$('.sort_display2').css("display","none");
		$(".sort>img").attr("src","images/尖括号下.png");
	}
}
function sort3(){
	var img = $(".sort>img").attr("src");
	console.log(img);
	if (img== "images/尖括号下.png") {
		$('.sort_display3').css({"display":"block","display":"flex"});
		$(".sort>img").attr("src","images/尖括号上.png");
	}
	if (img== "images/尖括号上.png") {
		$('.sort_display3').css("display","none");
		$(".sort>img").attr("src","images/尖括号下.png");
	}
}
function sort4(){
	var img = $(".sort>img").attr("src");
	console.log(img);
	if (img== "images/尖括号下.png") {
		$('.sort_display4').css({"display":"block","display":"flex"});
		$(".sort>img").attr("src","images/尖括号上.png");
	}
	if (img== "images/尖括号上.png") {
		$('.sort_display4').css("display","none");
		$(".sort>img").attr("src","images/尖括号下.png");
	}
}
function home1(){
	$(".four_img").css("background-image","url(images/home1.jpg)")
}
function home2(){
	$(".four_img").css("background-image","url(images/home2.jpg)")
}
function home3(){
	$(".four_img").css("background-image","url(images/home3.jpg)")
}