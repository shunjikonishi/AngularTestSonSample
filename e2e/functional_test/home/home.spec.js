'use strict';

describe('home (order list)', function() {
  var page={};

  beforeEach(function() {
    browser.get('/orderlist/index.HTML');
    page.home = require('../../components/home/home.po');
  });

  it('カートに商品を50個追加', function(done) {

    var i =0;
    function addCart(){
      var p = page.home.addCart( i % 4);

      p.then(function(){
        if(i<50){ 
          addCart();
        }else{
          p.then(function(){
            expect(page.home.viewcartBtnEl.getText()).toBe('カートを見る (50)');
            page.home.moveCartView();
            done();
          });
        }
      });

      i++;
    }
    addCart();
  });

  it('初期状態確認', function(done) {
    expect(page.home.viewcartBtnEl.getText()).toBe('カートを見る');
    done();
  });

 // it('カートに商品を1つ追加', function(done) {
 //   page.home.addCart('1').then(function(){
 //     expect(page.home.viewcartBtnEl.getText()).toBe('カートを見る (1)');
 //     done();
 //   });
 // });

 // it('カートに商品を2つ追加', function(done) {
 //   page.home.addCart('1').then(function(){
 //     return page.home.addCart('2');
 //   }).then(function(){
 //     expect(page.home.viewcartBtnEl.getText()).toBe('カートを見る (2)');
 //     done();
 //   });
 // });

 // it('カートに商品を3つ追加', function(done) {
 //   page.home.addCart('1').then(function(){
 //     page.home.addCart('2')
 //     .then(function(){
 //       return page.home.addCart('3');
 //      });
 //   }).then(function(){
 //     expect(page.home.viewcartBtnEl.getText()).toBe('カートを見る (3)');
 //     done();
 //   });
 // });
});
