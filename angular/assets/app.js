(function() {
  var app = angular.module('glodjib', []);

  app.controller('ImagesController', function() {
    this.coverImages = images;
    this.imageIndex = 0;

    this.setImageIndex = function(index) {
      this.imageIndex = index;
    };
    this.imageUrl = function() {
      return this.coverImages[this.imageIndex].url;
    };
    this.tabIsSelected = function(index) {
      return index === this.imageIndex;
    };
  });

  var images = [
    {
      title: 'colors',
      url: 'http://farm8.staticflickr.com/7287/8741489997_fe247035e8_o.jpg'
    },
    {
      title: 'fog',
      url: 'http://farm9.staticflickr.com/8190/8447738544_77c0635190_o.jpg'
    }
  ];
})();
