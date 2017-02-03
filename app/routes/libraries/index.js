// app/routes/libraries/index.js
import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return this.store.findAll('library');
	},

	actions: {

		deleteLibrary(library_instance) {
			let confirmation = confirm('Are you sure?');

			if (confirmation) {
				library_instance.destroyRecord();
			}
		}
	}

});