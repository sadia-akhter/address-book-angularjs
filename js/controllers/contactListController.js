angular.module('addressBook')
.controller('contactListCtrl', ['$scope', function($scope){
	$scope.contacts = [
		{ 
			id: 1, 
			firstName: 'Harry', 
			lastName: 'Potter', 
			phones: [''], 
			emails: ['hpotter@domain.com'], 
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
			phones: [], 
			emails: ['sholmes@domain.com'], 
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
			phones: ['6174951000'], 
			emails: ['rlangon@domain.com'], 
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
	];
}]);