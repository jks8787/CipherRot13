export default Ember.ArrayController.extend({
  _encode: function(content) {
    var alphabet = this._createInverse({
      " ": " ",
      "a": "n",
      "b": "o",
      "c": "p",
      "d": "q",
      "e": "r",
      "f": "s",
      "g": "t",
      "h": "u",
      "i": "v",
      "j": "w",
      "k": "x",
      "l": "y",
      "m": "z"
    });

    // split content on "" to get chars
    var chars = Ember.A(content.split(""));

    // swap for the value of the key
    var encodedChars = chars.map(function(item, index, enumerable){
      return alphabet[item];
    });

    return encodedChars.join("");
  },
  _createInverse: function(hash){
    var originalHash = hash;
    var result = {};

    for (var key in hash) {
      var value = hash[key];

      if (key === value) {
        continue;
      }

      result[value] = key;
    }

    return $.extend({}, originalHash, result);
  },
  actions: {
    encode: function(messageModel) {
      // Original Content
      var contentOriginal = messageModel.get('contentOriginal');

      // Encode Message
      var encodedMessage = this._encode(contentOriginal);

      // Display message by updating contentEncoded property
      messageModel.set('contentEncoded', encodedMessage);
    }
  }
});
