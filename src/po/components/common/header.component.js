const BaseComponent = require("./base.component");

class HeaderComponent extends BaseComponent {
    constructor() {
        super('.primary_header');
    }

    get CartBrt() {
        return this.rootEl.$('.shopping_cart_link');
    }
}

module.exports = new HeaderComponent();