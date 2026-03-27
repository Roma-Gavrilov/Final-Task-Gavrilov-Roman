const BaseComponent = require("./base.component");

class FooterComponent extends BaseComponent {
    constructor() {
        super('footer');
    }

    get footer() {
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
}

module.exports = new FooterComponent();