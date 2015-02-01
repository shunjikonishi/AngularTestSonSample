'use strict';

describe('Controller: HomeController', function () {

  // load the controller's module
  beforeEach(module('AngularJsTestson'));

  var HomeCtrl, scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, cartItem, _$httpBackend_) {
    scope = $rootScope.$new();

    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/products').respond([{
      "productId": 10,
      "productName": "はじめてのAngularJS(和書)",
      "price": 2000
    },{
      "productId": 11,
      "productName": "AngularJSリファレンス 単行本（ソフトカバー）",
      "price": 3500
    },{
      "productId": 12,
      "productName": "スコンブ(業務用)",
      "price": 800
    },{
      "productId": 13,
      "productName": "味わいカルピス",
      "price": 100
    }]);

    HomeCtrl = $controller('HomeController', {
      $scope: scope,
      cartItem: cartItem
    });
  }));

  it('should ...', function () {

    expect(scope.products).undefined();
    $httpBackend.flush();
    expect(scope.products.length).to.eql(4);
  });
});
