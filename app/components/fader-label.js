// app/components/fader-label.js
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  classNames: ['label label-success label-fade'],
  classNameBindings: ['isShowing:label-show'],

  isShowing: false,

  isShowingChanged: Ember.observer('isShowing', function() {
  	console.log("isShowingChanged OBSERVER runs !!!")
    Ember.run.later(() => this.set('isShowing', false), 6000);
  })
});
