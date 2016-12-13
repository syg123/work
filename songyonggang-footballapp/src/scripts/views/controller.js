/**
 * Created by lenovo on 2016/12/10.
 */

function indexController(){}
function homeController($scope,$rootScope,$http,apiservice,dataformat){
    apiservice.access_server("./json/livelist.json",{oh:"oh"},"get")
        .success(function (data) {
            $scope.data = dataformat.dataFormat(data.data);
            $rootScope.data1 = data.data;
           // console.log($rootScope.data)
      })

}
function searchController(){}
function myController(){}
function parController($scope,$rootScope,apiservice,$stateParams){
  $scope.img = $rootScope.data1[$stateParams.id-1].img;
  $scope.title = $rootScope.data1[$stateParams.id-1].title;
}
angular.module("myapp")
    .controller("indexController",indexController)
    .controller("homeController",homeController)
    .controller("searchController",searchController)
    .controller("myController",myController)
    .controller("parController",parController)
