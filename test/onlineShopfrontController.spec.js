describe('OnlineShopfrontController', function() {
  beforeEach(module('OnlineShopfront'));

  var ctrl, scope, $httpBackend;

  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('clothes/clothes.json').
    respond([{
      product_name: "Almond Toe Court Shoes, Patent Black"
    }, {
      product_name: "Suede Shoes, Blue"
    }]);

    scope = $rootScope.$new();
    ctrl = $controller('OnlineShopfrontController', {
      $scope: scope
    });
  }));

  it('should get a list of clothes', function() {
    expect(scope.products).toBeUndefined();
    $httpBackend.flush();

    expect(scope.products).toEqual([{
      product_name: "Almond Toe Court Shoes, Patent Black"
    }, {
      product_name: "Suede Shoes, Blue"
    }]);
  });
});
