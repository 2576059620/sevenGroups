var app=angular.module("app",["ionic","ui.router"]);
app.controller('goBack',function(){
	//定义返回事件
	$scope.getBack=function(){
		window.history.back();
	}
})
