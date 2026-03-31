const BaseComponent = require("../components/common/base.component");

class CartPage extends BaseComponent {
    constructor() {
        super('.cart_item');
    }

    get getProductName() {
        return this.rootEl.$('.inventory_item_name');
    }
}

module.exports = new CartPage();