(function(){
	var app = angular.module('gemStore', []);


	var currentTime = new Date();

	var gems = [
    {
      name: 'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
	  canPurchase: true,
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      postedon: currentTime,
      images: [
			{
				full: 'img/gem1.jpg',
				thumb: 'img/gem1_thumb.jpg'
			},
			{
				full: 'img/gem2.jpg',
				thumb: 'img/gem2_thumb.jpg'
			}
		],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: currentTime
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
         createdOn: currentTime
      }]
    }, {
      name: 'Bloodstone',
      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
	  canPurchase: false,
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      postedon: currentTime,
      images: [
			{
				full: 'img/gem2.jpg',
				thumb: 'img/gem2_thumb.jpg'
			},
			{
				full: 'img/gem3.jpg',
				thumb: 'img/gem3_thumb.jpg'
			}
		],
      reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: currentTime
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org",
        createdOn: currentTime
      }]
      }, {
        name: 'Zircon',
        description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
		canPurchase: true,
        shine: 70,
        price: 1100,
        rarity: 2,
        color: '#000',
        faces: 6,
        postedon: currentTime,
        images: [
			{
				full: 'img/gem3.jpg',
				thumb: 'img/gem3_thumb.jpg'
			},
			{
				full: 'img/gem1.jpg',
				thumb: 'img/gem1_thumb.jpg'
			}
		],
        reviews: [{
          stars: 1,
          body: "This gem is WAY too expensive for its rarity value.",
          author: "turtleguyy@example.org",
          createdOn: currentTime
        }, {
          stars: 1,
          body: "BBW: High Shine != High Quality.",
          author: "LouisW407@example.org",
          createdOn: currentTime
        }, {
          stars: 1,
          body: "Don't waste your rubles!",
          author: "nat@example.org",
          createdOn: currentTime
        }]
    }
  ];

	var gems2 = [
	{ 
		name: 'Azurite', 
		price: 2, 
		description: "Some gems have hidden quality, beyond their lusture their shine..",
		canPurchase: false,
		soldout: false,
		postedon: currentTime,
		images: [
			{
				full: 'img/gem1.jpg',
				thumb: 'img/gem1_thumb.jpg'
			},
			{
				full: 'img/gem2.jpg',
				thumb: 'img/gem2_thumb.jpg'
			}
		],
		reviews: [
		{
			stars: 5,
			body: "I love this product.",
			author: "holden@trademe.com",
			createdOn: currentTime
		},
		{
			stars: 5,
			body: "This is nice purchase.",
			author: "tim@xero.com",
			createdOn: currentTime
		}
		]
	},
	{
		name: 'Dodecahedron', 
		price: 2.59, 
		description: "Some gems have many hidden quality, beyond their lusture their shine.. Its misterious",
		canPurchase: true,
		soldout: false,
		postedon: currentTime,
		images: [
			{
				full: 'img/gem2.jpg',
				thumb: 'img/gem2_thumb.jpg'
			},
			{
				full: 'img/gem3.jpg',
				thumb: 'img/gem3_thumb.jpg'
			}
		],
		reviews: [
		{
			stars: 4,
			body: "I love this product.",
			author: "holden_bro@trademe.com",
			createdOn: currentTime
		},
		{
			stars: 4,
			body: "This is nice purchase.",
			author: "tim_sis@xero.com",
			createdOn: currentTime
		}
		]
	},
	{
		name: 'Pentagonal Gem', 
		price: 5.95, 
		description: "Pentagonal gems have no hidden quality, beyond their lusture their shine.. Its truely awesome",
		canPurchase: true,
		soldout: false,
		postedon: currentTime,
		images: [
			{
				full: 'img/gem3.jpg',
				thumb: 'img/gem3_thumb.jpg'
			},
			{
				full: 'img/gem1.jpg',
				thumb: 'img/gem1_thumb.jpg'
			}
		],
		reviews: [
		{
			stars: 5,
			body: "I love this product.",
			author: "holden2@trademe.com",
			createdOn: currentTime

		},
		{
			stars: 5,
			body: "This is nice purchase.",
			author: "tim3@xero.com",
			createdOn: currentTime
		}
		]
	}
	];


	app.controller('StoreController', function(){
		this.products = gems;

	});

	app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	app.controller('ReviewController', function(){
		this.review= {};
		this.addReview = function(product){
			//this.review.createdOn = Date.now();
			this.review.createdOn = currentTime
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	app.directive('productDescription', function(){
    return{
      restrict: 'E',
      templateUrl: 'templates/product-description.html'
    };
  });

	app.directive('productReviews', function(){
    return{
      restrict: 'E',
      templateUrl: 'templates/product-reviews.html'
    };
  });

	app.directive('productSpecs', function(){
    return{
      restrict: 'A',
      templateUrl: 'templates/product-specs.html'
    };
  });

app.directive('productPanels', function(){
	return{
		restrict: 'E',
		templateUrl: 'templates/product-panels.html',
		controller: function(){
			this.tab = 1;
			this.selectTab = function(setTab){
				this.tab = setTab;
			};
			this.isSelected = function(checkTab){
				return this.tab === checkTab;
			};
		}, 
		controllerAs: 'panel'
	};
});


})();


