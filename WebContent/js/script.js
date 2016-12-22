/**
 * AngularJS Tutorial 1
 * @author Arpit Khandelwal
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('myPageModule', ['ngRoute'])
.controller('FormController', ['$scope', function($scope) {
  $scope.userType = 'guest';
  $scope.submit = function(){
	  console.log("I'm herecdssss.", $scope.name);

  };
  
}]);
/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "home.html"})
    // Pages
    .when("/about", {templateUrl: "about.html"})
    .when("/contact", {templateUrl: "contact.html"})
    .when("/home", {templateUrl: "home.html"})
    .when("/why", {templateUrl: "why.html"})
    .when("/products", {templateUrl: "products.html"})
    .otherwise("/404", {templateUrl: "404.html"});
}]);

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });
  
  $(".submit").click(function(){
	  console.log("I'm here.");
  });
  

