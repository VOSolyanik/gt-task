import './layout.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import home from '../home';
import clinicalInfo from '../clinicalInfo';
import common from '../common';

import route from './layout.route';
import LayoutController from './layout.controller';

export default angular.module('app.layout', [uiRouter, home, clinicalInfo])
  .config(route)
  .controller('LayoutController', LayoutController)
  .name;
