const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 6000000,
  use: {
    browserName: 'chromium',
    channel: 'chrome',
    headless: false,
    baseURL: 'https://community.cloud.automationanywhere.digital/',
    storageState: 'auth.json'
  }
});
