const { expect } = require('@playwright/test');
const BasePage = require('./basePage');

class BagCountPage extends BasePage{
  constructor(page) {
    super(page);
    this.smallBagPlus = '#stepper-small poplin-button[icon="plus_custom"]';
    this.regularBagPlus = '#stepper-regular poplin-button[icon="plus_custom"]';
    this.largeBagPlus = '#stepper-large poplin-button[icon="plus_custom"]';
    this.continueBtn = 'poplin-button[ng-reflect-id="bag-continue-button"]';
  }

  async selectDeliveryOption(value, count) {
    if(value == 'small'){
      for(let i = 0; i < count; i++){
        await this.clickElement(this.smallBagPlus);
      }
    }
    else if(value == 'regular'){
      for(let i = 0; i < count; i++){
        await this.clickElement(this.regularBagPlus);
      }
    }
    else if(value == 'large'){
      for(let i = 0; i < count; i++){
        await this.clickElement(this.largeBagPlus);
      }
    }
  }

  async clickContinueBtn() {
    await this.clickElement(this.continueBtn);
  }
}

module.exports = BagCountPage;