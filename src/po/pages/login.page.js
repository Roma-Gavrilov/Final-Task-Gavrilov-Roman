class LoginPage {
    get username() {
        return $('#user-name');
    };

    get password() {
        return $('//input[@id="password"]');
    };

    get loginBtn() {
        return $('.submit-button');
    };

    async open() {
        await browser.url('https://www.saucedemo.com/');
    }

    async login(user, password) {
        await this.username.setValue(user);
        await this.password.setValue(password);
        await this.loginBtn.click();
    }
}

module.exports = new LoginPage();