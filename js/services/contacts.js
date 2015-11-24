angular.module('contacts', [])
   .factory('contacts', ['$localStorage', '$filter', '$http',
      function ($localStorage, $filter, $http) {

      $localStorage.contacts = [
         {
            id: 1,
            firstName: 'Harry',
            lastName: 'Steward',
            phone: '',
            email: 'hpotter@domain.com',
            urls: ['www.harrypotter.com'],
            address: {
               street: '4 Privet Drive, Little Whinging',
               street2: 'The cupboard under the stairs',
               city: 'Surrey',
               state: '',
               zip: '',
               country: 'UK'
            }
         },
         {
            id: 2,
            firstName: 'Sherlock',
            lastName: 'Holmes',
            phone: '',
            email: 'sholmes@domain.com',
            urls: ['www.sherlock.com'],
            address: {
            street: '221B Baker Street',
            street2: '',
            city: 'London',
            state: '',
            zip: 'NW1 6XE',
            country: 'UK'
            }
         },
         {
            id: 3,
            firstName: 'Robert',
            lastName: 'Langdon',
            phone: '6174951000',
            email: 'rlangon@domain.com',
            urls: ['www.symbology.com'],
            address: {
               street: '86 Brattle Street',
               street2: 'Langdon Residence',
               city: 'Cambridge',
               state: 'MA',
               zip: '02138',
               country: 'USA'
            }
         },
         {
            id: 4,
            firstName: 'Harry',
            lastName: 'Potter',
            phone: '',
            email: 'hpotter@domain.com',
            urls: ['www.harrypotter.com'],
            address: {
               street: '4 Privet Drive, Little Whinging',
               street2: 'The cupboard under the stairs',
               city: 'Surrey',
               state: '',
               zip: '',
               country: 'UK'
            }
         }
      ];

      var lastId = 4;

      $localStorage.contacts = $filter('orderBy')($localStorage.contacts, ['firstName', 'lastName']);
      $localStorage.selectedContact = $localStorage.contacts.length && $localStorage.contacts[0];

      // possible values for contactState = {"edit", "new", "detail"}
      $localStorage.contactState = "detail";

      return {
         getContacts: function() {
            return $localStorage.contacts;
         },

         getSelectedContact: function () {
            return $localStorage.selectedContact;
         },

         setSelectedContact: function (contact) {
            $localStorage.selectedContact = contact;
         },

         getContactState: function () {
           return $localStorage.contactState;
         },

         setContactState: function (state) {
           if (state === "detail" || state === "new" || state === "edit") {
             $localStorage.contactState = state;
           }
         },

         getSelectedContactName: function () {
           return angular.copy(this.getSelectedContact()).firstName + ' ' + angular.copy(this.getSelectedContact().lastName);
         },

         addNewContact: function (contact) {
           if (contact) {
             contact.id = ++lastId;
             $localStorage.contacts.push(contact);
             this.setSelectedContact(contact);
             this.setContactState('detail');
           }
         },

         saveContact: function (edited) {
           var original = this.getSelectedContact();

           if (edited.id !== original.id) {
             return;
           }

           for (property in edited) {
             if (edited[property] != original[property]) {
                original[property] = edited[property]
             }
           }
         },

         deleteContact: function (contact) {
           var index = $localStorage.contacts.indexOf(contact);
           if (index >= 0) {
             $localStorage.contacts.splice(index, 1);
             var newLength = $localStorage.contacts.length;
             $localStorage.selectedContact = newLength && $localStorage.contacts[(index % newLength)];
           }
         }
      };
   }])
