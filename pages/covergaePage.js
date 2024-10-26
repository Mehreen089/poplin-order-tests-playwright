const { expect } = require('@playwright/test');
const BasePage = require('./basePage');

class CoveragePage extends BasePage{
  constructor(page) {
    super(page);
    this.basicRB = 'poplin-radio-button[ng-reflect-label="Basic"]';
    this.premiumRB = 'poplin-radio-button[ng-reflect-label="Premium"]';
    this.premiunPlusRB = 'poplin-radio-button[ng-reflect-label="Premium+"]';
    this.continueBtn = 'poplin-button[ng-reflect-id="coverage-continue-button"]';
  }

  async selectCoverageption(value) {
    if(value == 'basic'){
      await this.clickElement(this.basicRB);
    }
    else if(value == 'premium'){
      await this.clickElement(this.premiumRB);
    }
    else if(value == 'premium+'){
      await this.clickElement(this.premiunPlusRB);
    }
  }

  async clickContinueBtn() {
    await this.clickElement(this.continueBtn);
  }

}

module.exports = CoveragePage;