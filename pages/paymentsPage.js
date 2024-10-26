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
    // await this.page.pause();
    // await this.waitForElementVisible(this.cardNumber);
    // await this.typeInElement(this.cardNumber, cardNum);
    // await this.typeInElement(this.expiry, carExp);
    // await this.typeInElement(this.cvv, cardCVV);
    // await this.clickElement(this.payBtn);
    //await this.page.waitForTimeout(15000);
    const frame = await this.page.frameLocator('iframe[title="Secure payment input frame"]');

    // Perform actions inside the iframe
    await frame.locator( this.cardNumber).waitFor({ state: 'visible', timeout: 60000 });
    await frame.locator( this.cardNumber).fill(cardNum);
    await frame.locator(this.expiry ).fill(carExp);
    await frame.locator(this.cvv ).fill(cardCVV);
    await this.clickElement(this.payBtn);
  }
}

module.exports = PaymentsPage;