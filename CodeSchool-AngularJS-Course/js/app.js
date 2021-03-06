(function() {
	// in the [ ] the dependencies are listed
	var app = angular.module('store', ['store-products']);
	var imagesPath = "images/";
	var gemImagesPath = imagesPath + "gems/";
	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum libero tincidunt diam accumsan molestie. Sed sit amet nisl ut neque luctus laoreet. Quisque in est faucibus, volutpat ligula congue, vestibulum arcu. In hac habitasse platea dictumst. Nulla dapibus, nisl sed placerat aliquet, magna tellus convallis magna, at tincidunt risus justo quis ligula. Morbi vel dolor eleifend, pharetra elit a, molestie metus. ",
			canPurchase: true,
			soldOut: false,
			image: {
				full: gemImagesPath + "redgem_full.png",
				thumbnail: gemImagesPath + "redgem_thumbnail.png"
			},
			reviews: [
				{
					body: "This is my first review on Dodecahedron",
					rating: 5,
					author: "peter.ivanics@reslink.fi"
				},
				{
					body: "LOVE IT!",
					rating: 5,
					author: "ivanicspeter92@gmail.com"
				},
				{
					body: "Crappy",
					rating: 1,
					author: "john@doe.com"
				}
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 4.95,
			description: "Praesent volutpat eros ipsum. Vivamus sed risus sit amet erat semper maximus eget ac libero. In gravida odio est, vitae molestie ipsum placerat lobortis. Ut rhoncus ullamcorper urna, id ornare arcu tristique a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce finibus dictum massa ut venenatis. Curabitur dictum posuere augue sed blandit. Etiam sem sapien, auctor vitae sapien quis, finibus aliquam ligula. Donec scelerisque tempor metus in sollicitudin.",
			canPurchase: true,
			soldOut: false,
			image: {
				full: gemImagesPath + "redgem_full.png",
				thumbnail: gemImagesPath + "redgem_thumbnail.png"
			},
			reviews: [

			]
		},
		{
			name: 'Shadowgem',
			price: 2.00,
			description: "Praesent volutpat eros ipsum. Vivamus sed risus sit amet erat semper maximus eget ac libero. In gravida odio est, vitae molestie ipsum placerat lobortis. Ut rhoncus ullamcorper urna, id ornare arcu tristique a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce finibus dictum massa ut venenatis. Curabitur dictum posuere augue sed blandit. Etiam sem sapien, auctor vitae sapien quis, finibus aliquam ligula. Donec scelerisque tempor metus in sollicitudin.",
			canPurchase: true,
			soldOut: false,
			image: {
				full: gemImagesPath + "redgem_full.png",
				thumbnail: gemImagesPath + "redgem_thumbnail.png"
			},
			reviews: [

			]
		},
		{
			name: 'Tiger\'s Eye',
			price: 4.45,
			description: "Praesent volutpat eros ipsum. Vivamus sed risus sit amet erat semper maximus eget ac libero. In gravida odio est, vitae molestie ipsum placerat lobortis. Ut rhoncus ullamcorper urna, id ornare arcu tristique a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce finibus dictum massa ut venenatis. Curabitur dictum posuere augue sed blandit. Etiam sem sapien, auctor vitae sapien quis, finibus aliquam ligula. Donec scelerisque tempor metus in sollicitudin.",
			canPurchase: false,
			soldOut: false,
			image: {
				full: gemImagesPath + "redgem_full.png",
				thumbnail: gemImagesPath + "redgem_thumbnail.png"
			},
			reviews: [
				{
					body: "Pretty good",
					rating: 3,
					author: "peter.ivanics@reslink.fi"
				}
			]
		}
	];
	
	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('GalleryController', function() {
		this.current = 0;

		/**
		 * Sets the value of the current variable to the given value.
		 * @param current The new value of the current.
		 *
		 * @author Peter Ivanics
		 * @date 14.03.2016.
         */
		this.setCurrent = function(current) {
			if (current === null) {
				this.current = 0;
			} else {
				this.current = current;
			}
		};
	});

	app.controller('ReviewController', function() {
		this.review = {};

		/**
		 * Adds the review to the provided product.
		 * @param product The product to which the current review should be added.
		 *
		 * @author Peter Ivanics
		 * @date 14.03.2016.
         */
		this.addReview = function(product) {
			product.reviews.push(this.review);

			this.review = {};
		};
	});
})();