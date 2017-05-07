describe('Discovery page tests', function() {
  beforeAll(function(done) {
    browser
      .url('/')
      .windowHandleSize({ width: 1200, height: 800 })
      .call(done);
  });
  describe('"Gameder"logo appears in the top', function() {
    it('should display an Gameder', function(done) {
      browser
        .waitForExist('.logo');

      expect(browser.getText('.logo'))
        .toBe('Gameder');

      browser.call(done);
    });
  });
  describe('Picture should have username', function() {
    it('Username is under picture', function(done) {
      browser
        .waitForExist('.username');

      let username = browser.getText('.username').substring(10);

      expect(browser.getText('.username').length)
        .toBeGreaterThan(0);

      browser.call(done);
    });
  });

  describe('Actions after click on "Yes" or "No"', function() {
    it('After pressing "Yes" another profile is showed', function(done) {
      browser
        .waitForExist('.username');

      let usernameBefore = browser.getText('.username').substring(10);
      browser.click(".yes");
      let usernameAfter = browser.getText('.username').substring(10);

      expect(usernameBefore === usernameAfter)
        .toBe(false);

      browser.call(done);
    });
    it('After pressing "No" another profile is showed', function(done) {
      browser
        .waitForExist('.username');

      let usernameBefore = browser.getText('.username').substring(10);
      browser.click(".no");
      let usernameAfter = browser.getText('.username').substring(10);

      expect(usernameBefore === usernameAfter)
        .toBe(false);

      browser.call(done);
    });
  });

});
