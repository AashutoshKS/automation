class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://community.cloud.automationanywhere.digital/');
  }
}

module.exports = LoginPage;
