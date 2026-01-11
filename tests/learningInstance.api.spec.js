const { test, expect, request } = require('@playwright/test');

test('Use Case 3: Learning Instance API Flow (Authorization Validation)', async () => {

  const apiContext = await request.newContext({
    baseURL: 'https://community.cloud.automationanywhere.digital',
    extraHTTPHeaders: {
      'Content-Type': 'application/json'
    }
  });

  const payload = {
    name: 'api-learning-instance',
    description: 'Attempted via API automation'
  };

  const start = Date.now();

  const response = await apiContext.post(
    '/cognitive/v3/learninginstances',
    { data: payload }
  );

  const duration = Date.now() - start;

  // 1️⃣ Status code
  expect(response.status()).toBe(401);

  // 2️⃣ Response time
  expect(duration).toBeLessThan(3000);

  const body = await response.json();

  // 3️⃣ Response schema
  expect(body).toHaveProperty('code');
  expect(body).toHaveProperty('message');

  // 4️⃣ Auth failure validation (flexible & correct)
  expect(body.code).toMatch(/UM|IQUM/i);
  expect(body.message).toMatch(/auth|token|unauthorized/i);

  console.log('✔ Learning Instance API security validated successfully');
});
