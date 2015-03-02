(function() {
  var app = angular.module('glodjib', []);

  app.controller('HomeController', function() {
    this.coverImages = images;
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
