(function() {
	var app = angular.module('store', [ ]);
	
	app.controller('StoreController', function(){
		this.products = gems;
	});
	
	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum libero tincidunt diam accumsan molestie. Sed sit amet nisl ut neque luctus laoreet. Quisque in est faucibus, volutpat ligula congue, vestibulum arcu. In hac habitasse platea dictumst. Nulla dapibus, nisl sed placerat aliquet, magna tellus convallis magna, at tincidunt risus justo quis ligula. Morbi vel dolor eleifend, pharetra elit a, molestie metus. ",
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Pentagonal Gem',
			price: 4.95,
			description: "Praesent volutpat eros ipsum. Vivamus sed risus sit amet erat semper maximus eget ac libero. In gravida odio est, vitae molestie ipsum placerat lobortis. Ut rhoncus ullamcorper urna, id ornare arcu tristique a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce finibus dictum massa ut venenatis. Curabitur dictum posuere augue sed blandit. Etiam sem sapien, auctor vitae sapien quis, finibus aliquam ligula. Donec scelerisque tempor metus in sollicitudin.",
			canPurchase: true,
			soldOut: true
		}
	];
})();