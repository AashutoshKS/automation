class FormPage {
  constructor(page) {
    this.page = page;

    // Sidebar
    this.automationMenu = page.getByRole('link', {
      name: 'Automation',
      exact: true
    });

    // Create flow
    this.createButton = page.getByRole('button', { name: 'Create', exact: true });
    this.formOption = page.getByRole('menuitem', { name: 'Form' });

    // Form details
    this.formNameInput = page.locator('input[name="name"]');
    this.createAndEditButton = page.getByRole('button', { name: 'Create & edit' });

    // Form elements
    this.textBoxElement = page.getByText('Textbox', { exact: true });
    this.fileUploadElement = page.getByText('Select File', { exact: true });

    // Canvas interactions
    this.textboxInputPreview = page.locator('input[type="text"]');
    this.fileInput = page.locator('input[type="file"]');

    // Save
    this.saveButton = page.getByRole('button', { name: 'Save', exact: true });
    this.successToast = page.getByText(/success/i);
  }

  async createForm(formName) {
    await this.automationMenu.click();
    await this.createButton.click();
    await this.formOption.click();
    await this.formNameInput.fill(formName);
    await this.createAndEditButton.click();
  }

  async addFormElements() {
    await this.textBoxElement.dblclick();
    await this.fileUploadElement.dblclick();
  }

  async fillTextbox(text) {
    await this.textboxInputPreview.fill(text);
  }

  async uploadFile(filePath) {
    await this.fileInput.setInputFiles(filePath);
  }

  async saveForm() {
    await this.saveButton.click();
  }
}

module.exports = FormPage;
