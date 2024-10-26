const BasePage = require('./basePage');

class ReviewOrderPage extends BasePage{
  constructor(page) {
    super(page);
    this.priceUpdateDismiss = '.notification-link-cta button';
    this.continueBtn = 'poplin-button[ng-reflect-id="place-order-button"]';
  }

  async clickDismissPriceUpdate() {
    await this.clickElement(this.priceUpdateDismiss);
  }

  async clickContinueBtn() {
    await this.clickElement(this.continueBtn);
  }
}

module.exports = ReviewOrderPage;