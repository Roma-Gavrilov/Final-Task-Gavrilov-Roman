# WebDriverIO Test Automation Project

"Dynamic Content" Flow

Focus: Dynamic interaction and verifying specific product details.

===========

## Technical Stack

- Tool: WebDriverIO
- Framework: Mocha
- Browsers: Chrome, Firefox (parallel execution supported)
- Locators: Mix of CSS and XPath
- Logging: Custom logger which product is being verified

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Roma-Gavrilov/Final-Task-Gavrilov-Roman.git
```

### "spec" Reporter:

---

[firefox 149.0 windows #1-0] Running: firefox (v149.0) on windows
[firefox 149.0 windows #1-0] Session ID: a8867ab9-508b-4700-9f3f-c2cc5d8b7ab5
[firefox 149.0 windows #1-0]
[firefox 149.0 windows #1-0] » src\tests\simple.tests.js
[firefox 149.0 windows #1-0] UC-1 Product Details Verification
[firefox 149.0 windows #1-0] ✓ Click on a product title
[firefox 149.0 windows #1-0] ✓ Validate price and description
[firefox 149.0 windows #1-0] ✓ Add the item to the cart from the Details Page
[firefox 149.0 windows #1-0]
[firefox 149.0 windows #1-0] UC-2 Footer & Social Links
[firefox 149.0 windows #1-0] ✓ Scroll to the footer
[firefox 149.0 windows #1-0] ✓ Verify that the Twitter, Facebook, and LinkedIn links exist
[firefox 149.0 windows #1-0] ✖ Verify that clicking a social link opens the correct URL in a new tab/window
[firefox 149.0 windows #1-0]
[firefox 149.0 windows #1-0] 5 passing (3s)
[firefox 149.0 windows #1-0] 1 failing
[firefox 149.0 windows #1-0]
[firefox 149.0 windows #1-0] 1) UC-2 Footer & Social Links Verify that clicking a social link opens the correct URL in a new tab/window
[firefox 149.0 windows #1-0] expect(received).toContain(expected) // indexOf

Expected substring: "https://twitter.com/saucelabs"
Received string: "https://x.com/saucelabs"
[firefox 149.0 windows #1-0] Error: expect(received).toContain(expected) // indexOf
[firefox 149.0 windows #1-0]
[firefox 149.0 windows #1-0] Expected substring: "https://twitter.com/saucelabs"
[firefox 149.0 windows #1-0] Received string: "https://x.com/saucelabs"
[firefox 149.0 windows #1-0] at socialLinksVerify (D:\Documents\Programming\EPAM\Final-Task-Gavrilov-Roman\src\utils\social-link-verify.js:10:30)
[firefox 149.0 windows #1-0] at async Context.<anonymous> (D:\Documents\Programming\EPAM\Final-Task-Gavrilov-Roman\src\tests\simple.tests.js:58:13)
[firefox 149.0 windows #1-0] at async Context.executeAsync (D:\Documents\Programming\EPAM\Final-Task-Gavrilov-Roman\node_modules\@wdio\utils\build\index.js:1108:20)
[firefox 149.0 windows #1-0] at async Context.testFrameworkFnWrapper (D:\Documents\Programming\EPAM\Final-Task-Gavrilov-Roman\node_modules\@wdio\utils\build\index.js:1188:14)

---

[chrome 146.0.7680.165 windows #0-0] Running: chrome (v146.0.7680.165) on windows
[chrome 146.0.7680.165 windows #0-0] Session ID: 7460675ec1437a8360197afc5201b17b
[chrome 146.0.7680.165 windows #0-0]
[chrome 146.0.7680.165 windows #0-0] » src\tests\simple.tests.js
[chrome 146.0.7680.165 windows #0-0] UC-1 Product Details Verification
[chrome 146.0.7680.165 windows #0-0] ✓ Click on a product title
[chrome 146.0.7680.165 windows #0-0] ✓ Validate price and description
[chrome 146.0.7680.165 windows #0-0] ✓ Add the item to the cart from the Details Page
[chrome 146.0.7680.165 windows #0-0]
[chrome 146.0.7680.165 windows #0-0] UC-2 Footer & Social Links
[chrome 146.0.7680.165 windows #0-0] ✓ Scroll to the footer
[chrome 146.0.7680.165 windows #0-0] ✓ Verify that the Twitter, Facebook, and LinkedIn links exist
[chrome 146.0.7680.165 windows #0-0] ✖ Verify that clicking a social link opens the correct URL in a new tab/window
[chrome 146.0.7680.165 windows #0-0]
[chrome 146.0.7680.165 windows #0-0] 5 passing (4s)
[chrome 146.0.7680.165 windows #0-0] 1 failing
[chrome 146.0.7680.165 windows #0-0]
[chrome 146.0.7680.165 windows #0-0] 1) UC-2 Footer & Social Links Verify that clicking a social link opens the correct URL in a new tab/window
[chrome 146.0.7680.165 windows #0-0] expect(received).toContain(expected) // indexOf

Expected substring: "https://twitter.com/saucelabs"
Received string: "https://x.com/saucelabs"
[chrome 146.0.7680.165 windows #0-0] Error: expect(received).toContain(expected) // indexOf
[chrome 146.0.7680.165 windows #0-0]
[chrome 146.0.7680.165 windows #0-0] Expected substring: "https://twitter.com/saucelabs"
[chrome 146.0.7680.165 windows #0-0] Received string: "https://x.com/saucelabs"
[chrome 146.0.7680.165 windows #0-0] at socialLinksVerify (D:\Documents\Programming\EPAM\Final-Task-Gavrilov-Roman\src\utils\social-link-verify.js:10:30)
[chrome 146.0.7680.165 windows #0-0] at async Context.<anonymous> (D:\Documents\Programming\EPAM\Final-Task-Gavrilov-Roman\src\tests\simple.tests.js:58:13)
[chrome 146.0.7680.165 windows #0-0] at async Context.executeAsync (D:\Documents\Programming\EPAM\Final-Task-Gavrilov-Roman\node_modules\@wdio\utils\build\index.js:1108:20)
[chrome 146.0.7680.165 windows #0-0] at async Context.testFrameworkFnWrapper (D:\Documents\Programming\EPAM\Final-Task-Gavrilov-Roman\node_modules\@wdio\utils\build\index.js:1188:14)

Spec Files: 0 passed, 2 failed, 2 total (100% completed) in 00:00:08
