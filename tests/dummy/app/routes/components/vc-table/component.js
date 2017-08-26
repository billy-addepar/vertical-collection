import Ember from 'ember';
import layout from './template';

const {
  Component
} = Ember;

export default Component.extend({
  tagName: 'table',
  classNames: ['et2-outer-wrapper'],
  layout
})
