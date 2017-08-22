import Ember from 'ember';
import layout from '../templates/components/flip-preloader';

export default Ember.Component.extend({
  layout,
  classNames:['flip-preloader'],
  classNameBindings: ['size']
});
