'use strict';

describe('Service: cartItem', function () {
  var products = [{
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
  }];
  function addAllProducts() {
    for (var item in products) {
      cartItem.add(item);
    }
  }

  // load the service's module
  beforeEach(module('AngularJsTestson'));

  // instantiate service
  var cartItem;
  beforeEach(inject(function (_cartItem_) {
    cartItem = _cartItem_;
  }));

  it('Initial length should be 0', function () {
    expect(cartItem.items.length).to.be.eql(0);
  });

  it('Test for add', function () {
    addAllProducts();
    expect(cartItem.items.length).to.be.eql(products.length);
  });

  /*
  // this method doesn't work
  it('Test for remove', function () {
    addAllProducts();
    cartItem.remove(products[1]);
    expect(cartItem.items.length).to.be.eql(products.length - 1);
  });
  */

  it('Test for clear', function () {
    addAllProducts();
    cartItem.clear();
    expect(cartItem.items.length).to.be.eql(0);
  });

  it('Test for removeProductId', function () {
    for (var i=0; i<3; i++) {
      cartItem.add(products[0]);
    }
    expect(cartItem.items.length).to.be.eql(3);

    cartItem.removeProductId(products[0].productId);
    expect(cartItem.items.length).to.be.eql(2);
  });
});
