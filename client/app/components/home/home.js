// TODO: import required modules
import _ from 'lodash';
import './home.styl';
import angular from 'angular';

//if ui router was not imported in 'app', and this wasn't a part of app, we would need to import the router here
//cannot use import keyword in conditional, but can use require, like:
//if(true) {require()}

export const home = angular.module('home', [

])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    template: `
      <section class="home">
        <div class="title">
          <h1>{{ title }}</h1>
        </div>

        <div class="items">
          <ul>
            <li ng-repeat="item in items">
              {{ item }}
            </li>
          </ul>
        </div>
      </section>
    `,
    controller: 'HomeController'
  });
})
.controller('HomeController', function($scope) {
  $scope.title = 'Welcome to the blog!'
  // TODO: be sure to import lodash!
  $scope.items = _.times(5, i => {
    return `I am item ${i}`;
  });
});

// TODO: export the module
