/*
 * TODO: import angular and other dependencies
 * like our app.styl and normalize.css and components/home
 * ui-router
 * so the below code works
 */
import 'normalize.css'; //this normalizes css in all of the browsers
import './app.styl'; //these load synchronously

import angular from 'angular';

import uiRouter from 'angular-ui-router';
// console.log('ur', uiRouter);
import ngAnimate from 'angular-animate';

import {home} from './components/home/home.js';

angular.module('app', [ uiRouter, ngAnimate, home.name //all modules have .name property - angular needs this
  // TODO: register other modules here.
  // remember, this array takes strings
  // not objects
]);
