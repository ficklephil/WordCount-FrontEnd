'use strict';

angular.module('wordCountFrontEndApp',['cgBusy'])
    .controller('MainCtrl', function ($scope, $http) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        //this needs to be a service
        $scope.myPromise = $http.get('http://localhost:3000/').success(function (data) {
            console.log(data.article);
            $scope.articles = data.article;
            $scope.searchDate = data.requestTime;
            $scope.articlesRequested = data.articlesRequested;
            $scope.rssFeeds = data.rssFeeds;
        });

    });
