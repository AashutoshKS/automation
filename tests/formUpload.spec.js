const { test, expect } = require('@playwright/test');
const isCI = !!process.env.CI;

test.skip(isCI, 'Skipped in CI due to Automation Anywhere UI instability');


test.use({ storageState: 'auth.json' });

test('Use Case 2: Form with File Upload', async ({ page }) => {

  // 1. Open home
  await page.goto('https://community.cloud.automationanywhere.digital/#/home');

  // Login guard
  const automationLink = page.getByRole('link', { name: 'Automation' }).first();
  await expect(automationLink).toBeVisible({ timeout: 20000 });
  await automationLink.click();

  // 2. Open Create dropdown (NO delay)
  const createBtn = page.getByRole('button', { name: 'Create' });
  await createBtn.waitFor({ state: 'visible', timeout: 20000 });

  await createBtn.hover();
  await createBtn.click({ force: true });

  // 3. IMMEDIATELY click Form (before dropdown closes)
  const formOption = page.getByText('Form').first();
  await formOption.click({ force: true });

  // 4. HARD wait for Form editor (AA editor is silent)
  await page.waitForTimeout(8000);

  // 5. Fill Form name (mandatory)
  await page.getByRole('textbox').first().fill('file-upload-form');

  // 6. Add controls (double-click = supported)
  await page.getByText('Textbox').first().dblclick();
  await page.getByText('File upload').first().dblclick();

  // 7. Upload file
  await page.waitForTimeout(2000);
  await page
    .locator('input[type="file"]')
    .setInputFiles('./tests/simple-file.txt');

  // 8. Save form
  const saveBtn = page.getByRole('button', { name: 'Save' });
  await expect(saveBtn).toBeEnabled({ timeout: 20000 });
  await saveBtn.click();

  // 9. Final validation (editor didn’t crash)
  await expect(saveBtn).toBeVisible();
});
