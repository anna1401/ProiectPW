'use strict';

/**
 * @ngdoc overview
 * @name proiectPwApp
 * @description
 * # proiectPwApp
 *
 * Main module of the application.
 */
angular
  .module('proiectPwApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl',
        controllerAs: 'gallery'
      })
      .when('/programm', {
        templateUrl: 'views/programm.html',
        controller: 'ProgrammCtrl',
        controllerAs: 'programm'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
