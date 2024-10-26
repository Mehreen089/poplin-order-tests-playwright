const { expect } = require('@playwright/test');
const BasePage = require('./basePage');

class PreferredProPage extends BasePage{
  constructor(page) {
    super(page);
    this.continueBtn = 'poplin-button[ng-reflect-id="preferred-continue-button"]';
  }

  async clickContinueBtn() {
    await this.clickElement(this.continueBtn);
  }

}

module.exports = PreferredProPage;