

// login.page.js
//var Page = require('./page')

var LoginPage =  {
    /**
     * define elements
     */
    username: { get: function () { return $('#email'); } },
    password: { get: function () { return $('#password'); } },
    form:     { get: function () { return $('#login'); } },
    flash:    { get: function () { return $('#flash'); } },

    /**
     * define or overwrite page methods
     */
    //open: { value: function() {
    //    Page.open.call(this, 'Sign In');
    //} },

    submit: { value: function() {
        this.form.click();
    } }
};

exports.LoginPage = LoginPage;