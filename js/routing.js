var app = angular.module('routingApp', ['ngRoute']);

app.config(function($routeProvider) {
    
    $routeProvider
        .when('/', {
            templateUrl : 'html/home.html'
        })
        .when('/portfolio', {
            templateUrl : 'html/portfolio.html'
        })
        .when('/contact', {
            templateUrl : 'html/contact.html'
        });
});

app.controller('routingController', function($scope){
    
});