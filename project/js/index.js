// $(function () {
	function help(el) {
		console.log(el);
		var help = $(".help span").text();
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