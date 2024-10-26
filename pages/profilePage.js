const BasePage = require('./basePage');

class ProfilePage extends BasePage{
  constructor(page) {
    super(page);
  }

  async clickContinueBtn() {
    await this.clickElement('poplin-button[label="Continue"]');
  }
}

module.exports = ProfilePage;