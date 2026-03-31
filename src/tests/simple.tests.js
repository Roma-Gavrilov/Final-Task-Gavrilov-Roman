const basePage = require('./../po/pages/base.page');
const loginPage = require('./../po/pages/login.page');
const inventoryPage = require('./../po/pages/inventory.page');
const inventoryItemPage = require('./../po/pages/inventory-item.page');
const cartPage = require('./../po/pages/cart.page');
const headerComponent = require('./../po/components/common/header.component');
const footerComponent = require('./../po/components/common/footer.component');
const { socialLinksVerify } = require('./../utils/social-link-verify');
const assert = require('assert');



describe('UC-1 Product Details Verification', () => {
    beforeEach(async () => {
        await basePage.open();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    it('Click on a product title', async () => {
        const productNameBefore = await inventoryPage.getProductByName.getText();
        await inventoryPage.getProductByName.click();
        const productNameAfter = await inventoryItemPage.getProductName.getText();
        assert.strictEqual(productNameBefore, productNameAfter, 'Wrong product opened');
    });

    it('Validate price and description', async () => {
        const descriptionInventoryPage = await inventoryPage.getProductDescription.getText();
        const priceInventoryPage = await inventoryPage.getProductPrice.getText();
        await inventoryPage.getProductByName.click();
        const descriptionItemPage = await inventoryItemPage.getProductDescription.getText();
        const priceItemPage = await inventoryItemPage.getProductPrice.getText();
        assert.strictEqual(descriptionInventoryPage, descriptionItemPage, 'Description does not match');
        assert.strictEqual(priceInventoryPage, priceItemPage, 'Price does not match');
    });

    it('Add the item to the cart from the Details Page', async () => {
        const productAddToCart = await inventoryPage.getProductByName.getText();
        await inventoryPage.getProductByName.click();
        await inventoryItemPage.addToCartBtn.click();
        await headerComponent.CartBrt.click();
        const productAddedToCart = await cartPage.getProductName.getText();
        assert.strictEqual(productAddToCart, productAddedToCart, 'Wrong product in cart');
    });
});

describe('UC-2 Footer & Social Links', () => {
    beforeEach(async () => {
        await basePage.open();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    it('Scroll to the footer', async () => {
        const isFooterDisplayed = await footerComponent.getFooter.isDisplayed();
        assert.strictEqual(isFooterDisplayed, true, 'Footer is not displayed');
    });

    it('Verify that the Twitter, Facebook, LinkedIn links exist', async () => {
        const isTwitterExisting = await footerComponent.twitter.isExisting();
        const isFacebookExisting = await footerComponent.facebook.isExisting();
        const isLinkedInExisting = await footerComponent.linkedin.isExisting();
        assert.ok(isTwitterExisting, 'Twitter link does not exist');
        assert.ok(isFacebookExisting, 'Facebook link does not exist');
        assert.ok(isLinkedInExisting, 'LinkedIn link does not exist');
    });

    it('Verify that clicking a social link opens the correct URL in a new tab/window', async () => {        
        for (const link of footerComponent.getSocialLinks) {
            await socialLinksVerify(link);
        }
    });
})