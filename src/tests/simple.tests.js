const basePage = require('./../po/pages/base.page');
const loginPage = require('./../po/pages/login.page');
const inventoryPage = require('./../po/pages/inventory.page');
const inventoryItemPage = require('./../po/pages/inventory-item.page');
const cartPage = require('./../po/pages/cart.page');
const headerComponent = require('./../po/components/common/header.component');
const footerComponent = require('./../po/components/common/footer.component');
const { socialLinksVerify } = require('./../utils/social-link-verify');
const assert = require('assert');
const logger = require('./../utils/logger');


describe('UC-1 Product Details Verification', () => {
    beforeEach(async () => {
        await basePage.open();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    it('Click on a product title', async () => {
        logger.info('Get product name from inventory page');
        const productNameBefore = await inventoryPage.getProductByName.getText();
        logger.info(`Product found: ${productNameBefore}`);
        logger.info(`Click on product - ${productNameBefore}`);
        await inventoryPage.getProductByName.click();
        logger.info('Get product name from product details page');
        const productNameAfter = await inventoryItemPage.getProductName.getText();
        logger.info(`Product opened: ${productNameAfter}`);
        logger.info('Verify product name matches');
        assert.strictEqual(productNameBefore, productNameAfter, 'Wrong product opened');
        logger.info('Product title verification passed');
    });

    it('Validate price and description', async () => {
        logger.info('Get product description and price from inventory page');
        const descriptionInventoryPage = await inventoryPage.getProductDescription.getText();
        const priceInventoryPage = await inventoryPage.getProductPrice.getText();
        logger.info(`Inventory page - Description: "${descriptionInventoryPage}", Price: "${priceInventoryPage}"`);
        logger.info(`Click on product to open details page`);
        await inventoryPage.getProductByName.click();
        logger.info('Get product description and price from product details page');
        const descriptionItemPage = await inventoryItemPage.getProductDescription.getText();
        const priceItemPage = await inventoryItemPage.getProductPrice.getText();
        logger.info(`Product page - Description: "${descriptionItemPage}", Price: "${priceItemPage}"`);
        logger.info('Verify description matches');
        assert.strictEqual(descriptionInventoryPage, descriptionItemPage, 'Description does not match');
        logger.info('Verify price matches');
        assert.strictEqual(priceInventoryPage, priceItemPage, 'Price does not match');
        logger.info('Product description and price verification passed');
    });

    it('Add the item to the cart from the Details Page', async () => {
        logger.info('Get product name from inventory page before adding to cart');
        const productAddToCart = await inventoryPage.getProductByName.getText();
        logger.info(`Product to add: ${productAddToCart}`);
        logger.info(`Click on product: ${productAddToCart}`);
        await inventoryPage.getProductByName.click();
        logger.info('Click "Add to cart" button');
        await inventoryItemPage.addToCartBtn.click();
        logger.info('Open cart');
        await headerComponent.CartBrt.click();
        logger.info('Get product name from cart');
        const productAddedToCart = await cartPage.getProductName.getText();
        logger.info(`Product in cart: ${productAddedToCart}`);
        logger.info('Verify correct product added to cart');
        assert.strictEqual(productAddToCart, productAddedToCart, 'Wrong product in cart');
        logger.info('Product successfully added to cart');
    });
});

describe('UC-2 Footer & Social Links', () => {
    beforeEach(async () => {
        await basePage.open();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    it('Scroll to the footer', async () => {
        logger.info('Check if footer is displayed');
        const isFooterDisplayed = await footerComponent.getFooter.isDisplayed();
        logger.info(`Footer displayed: ${isFooterDisplayed}`);
        assert.strictEqual(isFooterDisplayed, true, 'Footer is not displayed');
        logger.info('Footer visibility verified');
    });

    it('Verify that the Twitter, Facebook, LinkedIn links exist', async () => {
        logger.info('Check social links existence');
        const isTwitterExisting = await footerComponent.twitter.isExisting();
        const isFacebookExisting = await footerComponent.facebook.isExisting();
        const isLinkedInExisting = await footerComponent.linkedin.isExisting();
        logger.info(`Twitter: ${isTwitterExisting}, Facebook: ${isFacebookExisting}, LinkedIn: ${isLinkedInExisting}`);
        assert.ok(isTwitterExisting, 'Twitter link does not exist');
        assert.ok(isFacebookExisting, 'Facebook link does not exist');
        assert.ok(isLinkedInExisting, 'LinkedIn link does not exist');
        logger.info('Social links existence verified');
    });

    it('Verify that clicking a social link opens the correct URL in a new tab/window', async () => {        
        for (const link of footerComponent.getSocialLinks) {
            await socialLinksVerify(link);
        }
    });
})