import 'bootstrap/dist/css/bootstrap.css';
import 'ngstorage/ngStorage.js';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';

import route from './app.config';
import layout from './layout';

angular.module('app', [uiRouter, ngMessages, 'ngStorage', layout])
  .config(route);
