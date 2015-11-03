/**
 * Created by asif on 14-10-2015.
 */
angular.module('tngov')
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/home',{
                templateUrl:'/Template/Home/index.html',
                controller:'homeControllers'
            })
            .when('/aboutus',{
                templateUrl:'/Template/AboutUs/index.html',
                controller:'aboutusControllers'
            })
            .otherwise(
            {redirectTo:'/home'}
        )
    }]);