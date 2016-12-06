import 'bootstrap/dist/css/bootstrap.css';
import 'ngstorage/ngStorage.js';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import route from './app.config';
import layout from './layout';

angular.module('app', [uiRouter, 'ngStorage', layout])
  .config(route);
