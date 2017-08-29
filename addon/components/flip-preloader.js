import Ember from 'ember';
import layout from '../templates/components/flip-preloader';

const {
  computed,
  Component
} = Ember;

export default Component.extend({
  layout,
  classNames:['flip-preloader'],
  classNameBindings: ['size'],
  bg1: "#44B3C2",
  bg2: "#F1A94E",
  bg3: "#E45641",
  bg4: "#5D4C46",
  bg5: "#7B8D8E",
  boxCount: 5,
  boxes: computed('boxCount', function() {
    let _count = this.get('boxCount');
    let i = 0;
    let _arr = [];
    while(i < _count) {
      _arr.push(++i);
    }
    return _arr;
  }),

  didRender() {
    this._super(...arguments);
    let box1bg = this.get('bg1');
    let box2bg = this.get('bg2');
    let box3bg = this.get('bg3');
    let box4bg = this.get('bg4');
    let box5bg = this.get('bg5');
    document.documentElement.style.setProperty('--box1-bg', box1bg);
    document.documentElement.style.setProperty('--box2-bg', box2bg);
    document.documentElement.style.setProperty('--box3-bg', box3bg);
    document.documentElement.style.setProperty('--box4-bg', box4bg);
    document.documentElement.style.setProperty('--box5-bg', box5bg);
  }
});
