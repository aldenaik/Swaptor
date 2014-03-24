'use strict';

describe('Service: Browse', function () {

  // load the service's module
  beforeEach(module('swaptorApp'));

  // instantiate service
  var Browse;
  beforeEach(inject(function (_Browse_) {
    Browse = _Browse_;
  }));

  it('should do something', function () {
    expect(!!Browse).toBe(true);
  });

});
