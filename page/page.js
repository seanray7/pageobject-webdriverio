function Page () {
    
    //this.title = 'Sign In - League Ally';
}

Page.prototype.open = function () {
    // this.timeout(10 * 60 * 1000);
    // browser.url('http://the-internet.herokuapp.com/login');
    // var title = browser.getTitle();
    // assert.equal(title, 'The Internet');
}

module.exports = new Page()