//此页面是封装常用的方法  数据用 factory 方法用 service
function apiservice($http){
	var jsonUrl = function(params){
		var str = "" , arr = [];
		for( var i in params){
			str = i + "=" +params[i];
			arr.push(str)
		};
		return arr.join("&");
	};
	var fatch = function(url,params,method){
		var method = method.toLowerCase();
		if(method == "get"){
			params = jsonUrl(params);
			return $http.get(url+"?"+params);
		}else{
			return $http.post(url,params);
		}
	};
	this.access_server = function(url,params,method){
		return fatch(url,params,method);
	};
};
function dataFormat(){
	this.dataFormat = function(data){
		var tempArr = [];
		for(var i=0,len=Math.ceil(data.length/2);i<len;i++){ // 0 1 2
			tempArr[i] = [];
			tempArr[i].push(data[i*2]);
			data[i*2+1] && tempArr[i].push(data[i*2+1]);
		}
		return tempArr;
	}
}
angular.module("myapp")
	.service("apiservice",apiservice)
	.service("dataformat",dataFormat)

