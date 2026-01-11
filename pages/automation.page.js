class AutomationPage {
  constructor(page) {
    this.page = page;

    this.createBotCTA = page.getByText('Create a bot...');
    this.automationMenu = page.getByRole('link', { name: 'Automation', exact: true });
    this.createButton = page.getByRole('button', { name: 'Create', exact: true });
    this.taskBotOption = page.getByRole('menuitem', { name: 'Task Bot' });
    this.taskNameInput = page.locator('input[name="name"]');
    this.createConfirmButton = page.getByRole('button', { name: 'Create & edit' });
    this.messageBoxAction = page.getByText('Message Box', { exact: true });
    this.saveButton = page.getByRole('button', { name: 'Save', exact: true });
    this.successToast = page.getByText(/success/i);
  }

  async enterAutomationWorkspace() {
    await this.createBotCTA.click();
  }

  async createTaskBot(taskName) {
    await this.automationMenu.click();
    await this.createButton.click();
    await this.taskBotOption.click();
    await this.taskNameInput.fill(taskName);
    await this.createConfirmButton.click();
  }

  async addMessageBoxAndSave() {
    await this.messageBoxAction.dblclick();
    await this.saveButton.click();
  }
}

module.exports = AutomationPage;
