attr = DS.attr

export default DS.Model.extend({
  title: attr('string'),
  contentOriginal: attr('string'),
  contentEncoded: attr('string'),
  author: attr('string')
});
