const { test, expect } = require('@playwright/test');

test.use({ storageState: 'auth.json' });

test('Use Case 1: Create Message Box Task', async ({ page }) => {

  // 1. Go to home
  await page.goto('https://community.cloud.automationanywhere.digital/#/home');

  // Login guard
  const automationLink = page.getByRole('link', { name: 'Automation' }).first();
  await expect(automationLink).toBeVisible({ timeout: 20000 });
  await automationLink.click();

  // 2. Open Create dropdown (NO DELAYS)
  const createBtn = page.getByRole('button', { name: 'Create' });
  await createBtn.waitFor({ state: 'visible', timeout: 20000 });

  await createBtn.hover();
  await createBtn.click({ force: true });

  // 3. IMMEDIATELY click Task Bot (before menu auto-closes)
  const taskBotOption = page.getByText('Task Bot').first();
  await taskBotOption.click({ force: true });

  // 4. HARD WAIT for editor (AA editor has no stable hook)
  await page.waitForTimeout(8000);

  // 5. Validate editor by Save button presence
  const saveBtn = page.getByRole('button', { name: 'Save' });
  await expect(saveBtn).toBeVisible({ timeout: 30000 });

  // 6. Add Message Box
  const searchActions = page.getByPlaceholder('Search actions');
  await searchActions.fill('Message Box');

  const messageBox = page.getByText('Message box').first();
  await messageBox.dblclick();

  // 7. Fill required field
  const requiredInput = page.getByPlaceholder('Required');
  await requiredInput.fill('Hello World');

  // 8. Save
  await expect(saveBtn).toBeEnabled();
  await saveBtn.click();

  // 9. Final assertion
  await expect(saveBtn).toBeVisible();
});
