angular.module('addressBook')
   .constant('contactActiveClass', 'btn-default')
   .controller('contactListCtrl', ['$scope', 'contactActiveClass', 'contacts',
      function($scope, contactActiveClass, contacts){

         $scope.contacts = contacts.getContacts();
         $scope.selectedContact = contacts.getSelectedContact();


         $scope.getContactClass = function (contact) {
            return contact === $scope.selectedContact ? contactActiveClass : '';
         }


         $scope.selectContact = function (contact) {
            $scope.selectedContact = contact;
            contacts.setSelectedContact(contact);
            console.log('selectContact: ' + contact.firstName + " " + contact.lastName);
         }


      }
   ]);