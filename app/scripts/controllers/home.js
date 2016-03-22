'use strict';

/**
 * @ngdoc function
 * @name artMuseumApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the artMuseumApp
 */
angular.module('proiectPwApp')
  .controller('HomeCtrl', function () {

    $('.carousel').carousel({
      interval: 5000,
      pause: 'hover',
      wrap: true
    });

  });
