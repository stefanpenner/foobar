import Ember from 'ember';
import { boxCrossFade } from '../timings';

export default Ember.ArrayController.extend({
  actions: {
    remove: function(model) {
      Ember.set(model, 'isDeleted', true);
      Ember.run.later(this, function() {
        this.removeObject(model);
      }, boxCrossFade);
    }
  }
});
