var app=angular.module("app",["ionic","ui.router"]);
app.controller('goBack',function(){
	//定义返回事件
	$scope.getBack=function(){
		window.history.back();
	}
});

	$("#gallery").animate({
		"padding-top":"30px",
		"opacity":"1"
	},600);
	$("#YWART").animate({
		"padding-top":"20px",
		"opacity":"1"
	},1200);
	$("#not").animate({
		"padding-top":"20px",
		"opacity":"1"
	},1800);
	$("#unl").animate({
		"padding-top":"25px",
		"opacity":"1"
	},2200);
	$("#entrance").animate({
		"margin-top":"-5px",
		"opacity":"1"
	},2800);

