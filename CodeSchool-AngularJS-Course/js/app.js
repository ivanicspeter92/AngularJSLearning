(function() {
	var app = angular.module('store', [ ]);
	
	app.controller('StoreController', function(){
		this.product = gems;
	});
	
	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: ". . .",
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Pentagonal Gem',
			price: 4.95,
			description: ". . .",
			canPurchase: true,
			soldOut: false
		}
	];
})();