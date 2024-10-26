const { expect } = require('@playwright/test');
const BasePage = require('./basePage');

class PaymentsPage extends BasePage{
  constructor(page) {
    super(page);
    this.cardNumber = '#Field-numberInput';
    this.expiry = '#Field-expiryInput';
    this.cvv = '#Field-cvcInput';
    this.payBtn = 'poplin-button[ng-reflect-id="stripe-pay-button"]'
  }

  async addPaymentDetailsAndPlacePrder(cardNum, carExp, cardCVV) {
    const frame = await this.page.frameLocator('iframe[title="Secure payment input frame"]');
    await frame.locator( this.cardNumber).waitFor({ state: 'visible', timeout: 60000 });
    await frame.locator( this.cardNumber).fill(cardNum);
    await frame.locator(this.expiry ).fill(carExp);
    await frame.locator(this.cvv ).fill(cardCVV);
    await this.clickElement(this.payBtn);
  }

  async clickPaybtn() {
    const frame = await this.page.frameLocator('iframe[title="Secure payment input frame"]');
    await frame.locator( this.cardNumber).waitFor({ state: 'visible', timeout: 60000 });
    await this.clickElement(this.payBtn);
  }

  async verifyAlertMessage(message){
    this.page.on('dialog', async dialog => {
      expect(dialog.message()).toBe(message);
      await dialog.accept();
    });
  }
}

module.exports = PaymentsPage;