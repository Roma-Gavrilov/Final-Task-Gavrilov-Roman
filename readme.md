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
cd Final-Task-Gavrilov-Roman
```

### "spec" Reporter:

---

[chrome 146.0.7680.165 windows #0-0] Running: chrome (v146.0.7680.165) on windows
[chrome 146.0.7680.165 windows #0-0] Session ID: bfd92458d888c1afe5ce1eae2067d7fe
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
[chrome 146.0.7680.165 windows #0-0] ✓ Verify that clicking a social link opens the correct URL in a new tab/window
[chrome 146.0.7680.165 windows #0-0]
[chrome 146.0.7680.165 windows #0-0] 6 passing (1.5s)

---

[firefox 149.0 windows #1-0] Running: firefox (v149.0) on windows
[firefox 149.0 windows #1-0] Session ID: 45de42d8-e3f1-4d14-9b6f-48559d172f85
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
[firefox 149.0 windows #1-0] ✓ Verify that clicking a social link opens the correct URL in a new tab/window
[firefox 149.0 windows #1-0]
[firefox 149.0 windows #1-0] 6 passing (2.3s)

Spec Files: 2 passed, 2 total (100% completed) in 00:00:05
