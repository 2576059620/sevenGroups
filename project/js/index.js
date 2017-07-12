// $(function () {
	function help(el) {
		console.log(el);
		var help = el.nextElementSibling.textContent;
		console.log(help);
		if (help =="+") {
			$(".help_display").css("display","block");
			$(".help span").text("×");
		}
		if (help =="×"){
			$(".help_display").css("display","none");
			$(".help span").text("+");
		}
		
	}
// })