export default Ember.ObjectController.extend({
  needs: ["index"],
  encodedMessage: function() {
    var contentEncoded = this.get('controllers.index')._encode(this.get('contentOriginal'));

    this.set("contentEncoded", contentEncoded);
  }.observes('contentOriginal')
});
