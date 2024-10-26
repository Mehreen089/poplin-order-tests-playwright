const BasePage = require('./basePage');

class LoginPage extends BasePage{
  constructor(page) {
    super(page);
    this.emailInput = '#email'; 
    this.passwordInput = '#enter-password';
    this.continueBtn = '#buttonLabel-email-login-button';
    this.loginBtn = '#enter-password-login-button';
  }

  async navigate() {
    await this.page.goto('https://nonprod-app.poplin.co/auth/email-login');
  }

  async login(email, password) {
    await this.typeInElement(this.emailInput, email);
    await this.clickElement(this.continueBtn);
    await this.typeInElement(this.passwordInput, password);
    await this.clickElement(this.loginBtn);
  }
}

module.exports = LoginPage;