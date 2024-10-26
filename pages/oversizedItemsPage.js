const BasePage = require('./basePage');

class OverSizedItemsPage extends BasePage{
  constructor(page) {
    super(page);
    this.overSizedPlus = '#number-stepper-element-wrapper poplin-button[icon="plus_custom"]';
    this.continueBtn = 'poplin-button[ng-reflect-id="oversized-continue-button"]';
    this.drawerCheckBox1 = 'poplin-checkbox[ng-reflect-id="drawer-checkbox-1"]';
    this.drawerCheckBox2 = 'poplin-checkbox[ng-reflect-id="drawer-checkbox-2"]';
    this.drawerCheckBox3 = 'poplin-checkbox[ng-reflect-id="drawer-checkbox-3"]';
    this.drawerContinue = '.drawer-modal poplin-button[label="Continue"]';
  }

  async setOverSizedItems(count) {
    for(let i = 0; i < count; i++){
      await this.clickElement(this.overSizedPlus);
    }
  }

  async clickContinueBtn() {
    await this.clickElement(this.continueBtn);
  }

  async checkAllDrawerCheckboxes() {
    await this.clickElement(this.drawerCheckBox1);
    await this.clickElement(this.drawerCheckBox2);
    await this.clickElement(this.drawerCheckBox3);
    await this.clickElement(this.drawerContinue);
  }
}

module.exports = OverSizedItemsPage;