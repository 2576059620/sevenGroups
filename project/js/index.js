$(function () {
	function help(el) {
		console.log(el);
		var help = el.nextElementSibling;
		console.log(help);
		if (help.textContent =="+") {
			$(".help_display").css("display","block");
			$(".help span").text("×");
		}
		if (help.textContent =="×"){
			$(".help_display").css("display","none");
			$(".help span").text("+");
		}
		
	}
})