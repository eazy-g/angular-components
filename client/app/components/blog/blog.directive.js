// TODO: create the directive for the blog component
// don't forget to include the template and styles and controller
import './blog.styl';
import {blogController as controller} from './blog.controller.js';
import template from './blog.html';

export const blogDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm', //vm for view model...puts our controller in the template
    restrict: 'E', //restrict it to an element
    replace: true, //takes '<blog></blog> out of the DOM and replaces it with our actualy blog.html'
    scope: {} //keeps it isolated?
  };
};
