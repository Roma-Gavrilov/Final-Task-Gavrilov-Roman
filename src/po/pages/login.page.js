class LoginPage {
    get username() {
        return $('#user-name');
    }

    get password() {
        return $('//input[@id="password"]');
    }
    
    get loginBtn() {
        return $('.submit-button');
    };

    async login(user, pass) {
        await this.username.setValue(user);
        await this.password.setValue(pass);
        await this.loginBtn.click();
    }
}

module.exports = new LoginPage();