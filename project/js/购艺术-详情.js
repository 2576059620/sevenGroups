	var app=angular.module("app",[]);
	app.controller('goBack',function($scope){
		//定义返回事件
		$scope.goBack=function(){
			window.history.back();
		}
	});

	function detail(){
		$(".detail1").addClass('detail');
		$(".message1").removeClass('detail');
		$(".production1").css('display','inline-block');
		$(".art_message").css('display','none');
	}
	function message1(){
		$(".message1").addClass('detail');
		$(".detail1").removeClass('detail');
		$(".art_message").css('display','inline-block');
		$(".production1").css('display','none');
	}