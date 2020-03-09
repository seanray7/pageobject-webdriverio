var LoginPage = require('../page/login.po');

const userObj = {
    user: 'username@email.com',
    password: 'password',
}
var assert = require('assert');


describe('login form', () => {

    it('should have the right title ', function () {
        console.log('Step 1');
        this.timeout(10 * 60 * 1000);
        browser.url('http://the-internet.herokuapp.com/login');
        var title = browser.getTitle();
        assert.equal(title, 'The Internet');
    });
    it('should deny access with wrong creds', function () {
        LoginPage.username.setValue('username');
        LoginPage.password.setValue('password');
        LoginPage.submit();
        browser.pause(5000);
        expect(LoginPage.flash.getText()).to.contain('Your username is invalid!');
    });

    it('should allow access with correct creds', function () {
        LoginPage.username.setValue(userObj.user);
        LoginPage.password.setValue(userObj.password);
        LoginPage.submit();
        browser.pause(5000);
        expect(LoginPage.flash.getText()).to.contain('You logged into a secure area!');
    });
});