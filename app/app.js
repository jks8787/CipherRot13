import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = false;

var App = Ember.Application.extend({
  modulePrefix: 'cipher-rot13', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'cipher-rot13');

export default App;
