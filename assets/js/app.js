var APP = angular.module('myApp', ['ui.router','ngSanitize','ng.ueditor']);
APP.run(["$rootScope","$state","$stateParams",function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);
APP.config(["$stateProvider","$urlRouterProvider","$locationProvider",function($stateProvider, $urlRouterProvider,$locationProvider) {

 $urlRouterProvider.otherwise('/index/type1');
 $stateProvider
  .state('index', {
    url: '/index',
    templateUrl:"tpls/home.html"
  })
  .state('index.type1', {
    url: '/type1',
    templateUrl:"tpls/type1.html"
  })
  .state('index.type2', {
    url: '/type2',
    templateUrl:"tpls/type2.html"
  })
 //$locationProvider.html5Mode(true);
 //去掉#发现有问题 加上这句要把模板路径写成绝对地址，并且有个BUG：不能刷新，刷新会出现404，这个问题困扰我已久，有高手看到请指点，3Q
 //QQ:309678100

}]);

 APP.controller("CTRL", ["$scope", function($S) {
   $S._simpleConfig = {
     //这里可以选择自己需要的工具按钮名称,此处仅选择如下五个
     toolbars: [
       ['FullScreen', 'Source', 'Undo', 'Redo', 'Bold', 'test']
     ],
     //focus时自动清空初始化时的内容
     autoClearinitialContent: true,
     //关闭字数统计
     wordCount: false,
     //关闭elementPath
     elementPathEnabled: false
   };
   $S.content1 = 'Hello Ueditor';
   $S.content2 = 'Hello Ueditor Content2';
 }]);






