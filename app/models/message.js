var attr = DS.attr;

var Message = DS.Model.extend({
  title: attr('string'),
  contentOriginal: attr('string'),
  contentEncoded: attr('string'),
  author: attr('string')
});

Message.FIXTURES = [{
  id: 1,
  title: 'this is a title',
  contentOriginal: 'this is the content',
  contentEncoded: 'encoded?',
  author: 'Janice the Great and Powerful'
},{
  id: 2,
  title: 'this is another title',
  contentOriginal: 'this is the content again',
  contentEncoded: 'encoded? nope',
  author: 'Janice the Great and Powerful'
}];

export default Message;
