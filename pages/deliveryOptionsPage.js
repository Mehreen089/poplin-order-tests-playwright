const { expect } = require('@playwright/test');
const BasePage = require('./basePage');

class DeliveryOptionsPage extends BasePage{
  constructor(page) {
    super(page);
    this.standardDeliveryRB = 'poplin-radio-button[ng-reflect-label="Standard Delivery"]';
    this.expressDeliverRB = 'poplin-radio-button[ng-reflect-label="Express Delivery"]';
    this.continueBtn = 'poplin-button[ng-reflect-id="delivery-continue-button"]';
  }

  async selectDeliveryOption(value) {
    if(value == 'Standard'){
      await this.clickElement(this.standardDeliveryRB);
    }
    else if(value == 'Express'){
      await this.clickElement(this.expressDeliverRB);
    }
  }

  async clickContinueBtn() {
    await this.clickElement(this.continueBtn);
  }
}

module.exports = DeliveryOptionsPage;