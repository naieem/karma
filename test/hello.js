describe("naieem controller test", function() {
    var $rootScope, $scope, controller;
    beforeEach(function() {
        module('pie');
        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')('naieem', { $scope: $scope });
        });
    });

    describe("initialization", function() {
        it("it should initialize slice to 8", function() {
            expect($scope.slice).toBe(8);
        });
    });
    describe("test from test file", function() {
        it("it should be 10 from test file", function() {
            expect(t).toBe(10);
        });
    });
});