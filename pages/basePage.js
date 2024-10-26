class BasePage {
  constructor(page) {
      this.page = page;
  }

  async waitForElementVisible(element) {
    await this.page.waitForSelector(element, { state: 'visible' });
  }

  async typeInElement(element, value) {
    await this.page.fill(element, value);
  }

  async clickElement(element) {
    await this.page.click(element);
  }

  async scrollToElement(element) {
    await this.page.locator(element).scrollIntoViewIfNeeded();
  }
}

module.exports = BasePage;