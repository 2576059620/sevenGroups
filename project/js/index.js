function sort1(){
	var img = $(".sort>img").attr("src");
	console.log(img);
	if (img== "images/尖括号下.png") {
		$('.sort_box').css({"display":"block","display":"flex"});
		$(".sort>img").attr("src","images/尖括号上.png");
	}
	if (img== "images/尖括号上.png") {
		$('.sort_box').css("display","none");
		$(".sort>img").attr("src","images/尖括号下.png");
	}
}
// function sort2(){
// 	var img = $(".sort>img").attr("src");
// 	console.log(img);
// 	if (img== "images/尖括号下.png") {
// 		$('.sort_box').css({"display":"block","display":"flex"});
// 		$(".sort>img").attr("src","images/尖括号上.png");
// 	}
// 	if (img== "images/尖括号上.png") {
// 		$('.sort_box').css("display","none");
// 		$(".sort>img").attr("src","images/尖括号下.png");
// 	}
// }
// function sort3(){
// 	var img = $(".sort>img").attr("src");
// 	console.log(img);
// 	if (img== "images/尖括号下.png") {
// 		$('.sort_box').css({"display":"block","display":"flex"});
// 		$(".sort>img").attr("src","images/尖括号上.png");
// 	}
// 	if (img== "images/尖括号上.png") {
// 		$('.sort_box').css("display","none");
// 		$(".sort>img").attr("src","images/尖括号下.png");
// 	}
// }
// function sort4(){
// 	var img = $(".sort>img").attr("src");
// 	console.log(img);
// 	if (img== "images/尖括号下.png") {
// 		$('.sort_box').css({"display":"block","display":"flex"});
// 		$(".sort>img").attr("src","images/尖括号上.png");
// 	}
// 	if (img== "images/尖括号上.png") {
// 		$('.sort_box').css("display","none");
// 		$(".sort>img").attr("src","images/尖括号下.png");
// 	}
// }