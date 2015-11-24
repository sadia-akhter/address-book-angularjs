angular.module('contacts', [])
   .factory('contacts', ['$localStorage', '$filter', '$http',
      function ($localStorage, $filter, $http) {

      $http.get('/contacts.json').success(function(data) {
          $localStorage.contacts = data;
          console.log($localStorage.contacts);
      });

      var lastId = 0;
      for(var i = 0; i < $localStorage.contacts.length; i++) {
        if (lastId < $localStorage.contacts[i].id) {
          lastId = $localStorage.contacts[i].id;
        }
      }

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
           var index = this.findContact(contact);
           console.log('index: ' + index);
           if (index >= 0) {
             $localStorage.contacts.splice(index, 1);
             var newLength = $localStorage.contacts.length;
             $localStorage.selectedContact = newLength && $localStorage.contacts[(index % newLength)];
           }
         },

         findContact: function(contact) {
           for(var i = 0; i < $localStorage.contacts.length; i++) {
             if (contact.id == $localStorage.contacts[i].id) {
               return i;
             }
           }
           return -1;
         }
      };
   }])
