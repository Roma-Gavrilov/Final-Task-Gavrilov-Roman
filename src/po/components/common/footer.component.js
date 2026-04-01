const BaseComponent = require("./base.component");

class FooterComponent extends BaseComponent {
    constructor() {
        super('footer');
    }

    get getFooter() {
        return this.rootEl;
    }
    
    get twitter() {
        return this.rootEl.$('.social_twitter a');
    }

    get facebook() {
        return this.rootEl.$('.social_facebook a');
    }

    get linkedin() {
        return this.rootEl.$('.social_linkedin a');
    }

    get getSocialLinks() {
        return [
            { element: this.twitter, expected: 'https://x.com/saucelabs' },
            { element: this.facebook, expected: 'https://www.facebook.com/saucelabs' },
            { element: this.linkedin, expected: 'https://www.linkedin.com/company/sauce-labs/' },
        ];
    }
}

module.exports = new FooterComponent();