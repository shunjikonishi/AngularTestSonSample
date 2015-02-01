'use strict';

describe('Controller: HomeController', function () {

  // load the controller's module
  beforeEach(module('AngularJsTestson'));

  var HomeCtrl, scope, $httpBackend, _cartItem;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, cartItem, _$httpBackend_) {
    scope = $rootScope.$new();
    _cartItem = cartItem;

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

  it('test $scope.addCart', function () {
    $httpBackend.flush();

    scope.addCart(scope.products[0]);
    expect(_cartItem.items.length).to.eql(1);
  });

  it('test $scope.CartItemCount', function () {
    $httpBackend.flush();

    _cartItem.items.push(scope.products[0]);
    expect(scope.CartItemCount()).to.eql(1);
  });
});
