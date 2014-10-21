import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      { name: 1 },
      { name: 2 },
      { name: 3 },
      { name: 4 }
    ];
  }
});
