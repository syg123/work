//设置一个模块  如果没有[]表示获取
var myApp = angular.module("app", []);
//定制一个控制器
myApp.controller("demo", ["$scope", function($scope) {
	$scope.datas = [
		{
			FirstName:"FANG",
			LastName:"vane",
			Gender:"Male",
			Salary:"12333.50",
			salary:"￥12333.5",
			Birthday:"2017-07-11"
		},{
			FirstName:"SARA",
			LastName:"rose",
			Gender:"Female",
			Salary:"23334.23",
			salary:"￥23334.2",
			Birthday:"1997-02-01"
		},{
			FirstName:"AAM",
			LastName:"hot",
			Gender:"Male",
			Salary:"66880.50",
			salary:"￥66880.5",
			Birthday:"1986-03-04"
		},{
			FirstName:"MARK",
			LastName:"bear",
			Gender:"Male",
			Salary:"68000.00",
			salary:"￥68000.0",
			Birthday:"1968-03-22"
		}	
	
	]
	$scope.firstval = "";
	$scope.lastval = "";
	$scope.first = function(obj){
		if($scope.FirstName!=" "){
			if(obj.FirstName.toLowerCase().indexOf($scope.firstval.toLowerCase())!=-1){
				return true;
			}else{
				return false;
			}
		}else{
			return true;
		}
	}
	$scope.last = function(obj){
		if($scope.lastval!=" "){
			if(obj.LastName.toLowerCase().indexOf($scope.lastval.toLowerCase())!=-1){
				return true;
			}else{
				return false;
			}
		}else{
			return true;
		}
	}
	$scope.addClass=function(){
		$(event.target).siblings().find("span").removeClass();
		
		if($(event.target).find("span").hasClass("desc")){
			$(event.target).find("span").removeClass("desc")
			$(event.target).find("span").addClass("asc")
			$scope.order = $(event.target).text();
		}else{
			$(event.target).find("span").removeClass("asc")
			$(event.target).find("span").addClass("desc")
			$scope.order = "-"+ $(event.target).text();
			
		}
			
		console.log($scope.order)
		///$(event.target).find("span").tigclass("class","desc")
		/**/
	}
}]);

