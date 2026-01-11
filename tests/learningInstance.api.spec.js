const { test, expect } = require('@playwright/test');

test('Use Case 3: Learning Instance API Flow (Authorization Validation)', async ({ request }) => {

  const start = Date.now();

  const response = await request.post(
    'https://community.cloud.automationanywhere.digital/cognitive/v3/learninginstances',
    {
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        name: 'Playwright-Test-Instance',
        description: 'API automation validation'
      }
    }
  );

  const duration = Date.now() - start;

  // 1️⃣ Status code validation
  expect([401, 403]).toContain(response.status());

  // 2️⃣ Response time
  expect(duration).toBeLessThan(3000);

  // 3️⃣ Response body validation
  const body = await response.json();

  expect(body).toHaveProperty('code');
  expect(body).toHaveProperty('message');

  console.log('✔ Learning Instance API protected as expected');
});
