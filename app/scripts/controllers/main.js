'use strict';

angular.module('wordCountFrontEndApp')
    .controller('MainCtrl', function ($scope, $http) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        //this needs to be a service
        $http.get('http://localhost:3000/').success(function (data) {
            console.log(data.article);
            $scope.articles = data.article;
        });

    });
