const { expect } = require('@playwright/test');
const BasePage = require('./basePage');

class HomePage extends BasePage{
  constructor(page) {
    super(page);
    this.newOrderBtn = 'poplin-button[id=new-order-button-wrapper]'; 
    this.startNewOrderBtn = 'poplin-item[ng-reflect-title="Start new order"] p';
    this.repeatLastOrderBtn = 'poplin-item[ng-reflect-title="Repeat last order"] p';
    this.orderCards = 'poplin-order-status-card';
  }

  async verifyHomePage() {
    await this.page.waitForSelector('img[alt="Poplin Logo"]', { timeout: 60000 });
    await this.waitForElementVisible('img[alt="Poplin Logo"]');
  }

  async createNewOrder() {
    await this.scrollToElement(this.newOrderBtn);
    await this.clickElement(this.newOrderBtn);
    await this.clickElement(this.startNewOrderBtn);
  }

  async getOrdersCount() {
    await this.page.waitForTimeout(2000);
    const elements = await this.page.locator(this.orderCards);
    const count = await elements.count();
    return count;
  }

  async verifyNewCard(orderOldCount) {
    await this.verifyHomePage();
    const elements = await this.page.locator(this.orderCards);
    await expect(elements).toHaveCount(+orderOldCount + 1);
  }

  async repeatLastOrder() {
    await this.scrollToElement(this.newOrderBtn);
    await this.clickElement(this.newOrderBtn);
    await this.clickElement(this.repeatLastOrderBtn);
  }
}

module.exports = HomePage;