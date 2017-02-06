import Ember from 'ember';

export default Ember.Controller.extend({

  email: '',
  message: '',

  isEmailValid: Ember.computed.match('email', /^.+@.+\..+$/), 
  isMessageValid: Ember.computed.gte('message.length', 5),

  isValid: Ember.computed.and('isEmailValid','isMessageValid'),
  
  isDisabled: Ember.computed.not('isValid'),

  myMessage: Ember.computed('message', function(){ 
    console.log('myMessage function is called: ', this.get('message'));
    console.log('message valid : ', this.get('message'));
  }),

  actions: {
    sendMessage() {
      console.log("hey");
      // alert(`Email: ${this.get('email')} \n message: ${this.get('message')}`);
      const email = this.get('email');
      const message = this.get('message');

      const contact_object = this.store.createRecord('contact', { email: email, message: message });
      
      contact_object.save().then((response) => {
        this.set('responseMessage', `Thank you! We got your message | your email-id is : ${response.get('email')}`);
        this.set('email', '');
        this.set('message', '');
      });

    }
  }
});
