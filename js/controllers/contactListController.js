angular.module('addressBook')
   .constant('contactActiveClass', 'btn-default')
   .controller('contactListCtrl', ['$scope', 'contactActiveClass', 'contacts',
      function($scope, contactActiveClass, contacts){

         $scope.contacts = contacts.getContacts();
         $scope.selectedContact = contacts.getSelectedContact();


         $scope.$watch(
            function () {
               return contacts.getSelectedContact();
            },
            function (newContact, oldContact) {
               if (newContact != oldContact) {
                  $scope.selectedContact = contacts.getSelectedContact();
               }
            });

         $scope.getContactClass = function (contact) {
            return contact === $scope.selectedContact ? contactActiveClass : '';
         };

         $scope.selectContact = function (contact) {
            $scope.selectedContact = contact;
            contacts.setSelectedContact(contact);
         };

         $scope.addNewContact = function () {
           contacts.setContactState("new");
         }
      }
   ]);
