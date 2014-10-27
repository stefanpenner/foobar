import Ember from 'ember';

export default Ember.Controller.extend({
  isExpanded: false,
  actions: {
    toggle: function() {
      this.toggleProperty('isExpanded');
    }
  }
});
