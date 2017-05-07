describe('Login form tests', function() {
  beforeAll(function(done) {
    browser
      .url('/')
      .windowHandleSize({ width: 1200, height: 800 })
      .call(done);
  });
  describe('When a user does not enter a username and password', function() {
    it('should display an error message', function(done) {
      browser
        .click('.yes')
        .waitForExist('.username');

      expect(browser.getText('.username'))
        .toBe('Username:');

      browser.call(done);
    });
  });

});