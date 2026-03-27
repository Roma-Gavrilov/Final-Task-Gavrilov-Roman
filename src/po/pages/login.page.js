class LoginPage {
    async open() {
        await browser.url('/');
    }

    get loginBtn() {
        return $('.submit-button');
    };

    login(param) {
        const selectors = {
            username: '#user-name',
            password: '//input[@id="password"]'
        };
        return $(selectors[param]);
    };
}

module.exports = new LoginPage();