import './home.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import route from './home.routes';
import HomeController from './home.controller';

export default angular.module('app.home', [uirouter])
  .config(route)
  .controller('HomeController', HomeController)
  .name;
