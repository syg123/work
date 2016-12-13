/**
 * Created by lenovo on 2016/12/9.
 */
function config($stateProvider,$urlRouterProvider,$ocLazyLoadProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state("guide",{
            url:"/",
            templateUrl:"./src/scripts/tpls/guide.html"

        })
        .state("index",{
            url:"/index",
            templateUrl:"./src/scripts/tpls/index.html",
            controller :"indexController"
        })
        .state("index.home",{
            url:"/home",
            templateUrl:"./src/scripts/tpls/home.html",
            controller :"homeController"
        })
        .state("index.search",{
            url:"/search",
            templateUrl:"./src/scripts/tpls/search.html",
            controller :"searchController"
        })
        .state("index.my",{
            url:"/my",
            templateUrl:"./src/scripts/tpls/my.html",
            controller :"indexController"
        })
        .state("particulars",{
            url:"/particulars/:id",
            templateUrl:"./src/scripts/tpls/particulars.html",
            controller :"parController"
        })
}
angular.module("myapp")
        .config(config)