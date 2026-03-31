const BaseComponent = require("../components/common/base.component");

class InventoryPage extends BaseComponent {
    constructor() {
        super(`//div[@class="inventory_item"][.//div[text()="Sauce Labs Fleece Jacket"]]`)
    }

    get getProductByName() {
        return this.rootEl.$('.inventory_item_name');
    }

    get getProductDescription() {
        return this.rootEl.$('.inventory_item_desc');
    }

    get getProductPrice() {
        return this.rootEl.$('.inventory_item_price');
    }
}

module.exports = new InventoryPage();