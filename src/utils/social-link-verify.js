require('./../po/components/common/footer.component');

async function socialLinksVerify(link) {
    const mainWindow = await browser.getWindowHandle();
    await link.element.click();
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    await browser.waitUntil(async () => await browser.getUrl() !== 'about:blank', { timeout: 5000 });
    const currentUrl = await browser.getUrl();
    await expect(currentUrl).toContain(link.expected);
    await browser.closeWindow();
    await browser.switchToWindow(mainWindow);
}

module.exports = { socialLinksVerify };