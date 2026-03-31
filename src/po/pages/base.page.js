class BasePage {
    constructor(url) {
        this.url = url;
    }

    open() {
        return browser.url('/');
    }
}

module.exports = new BasePage();