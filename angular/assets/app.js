(function() {
  var app = angular.module('glodjib', []);

  app.controller('HomeController', function() {
    this.coverImage = image;
  });

  var image = {
    url: 'http://farm8.staticflickr.com/7287/8741489997_fe247035e8_o.jpg'
  };
})();
