import { test, expect } from '@playwright/test';
import { generateRandomEmail } from '../utils';

test('has title', async ({ page }) => {
  await page.goto('https://demo.seenons.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Seenons Waste Saver/);
});

test('Sign-up here link', async ({ page }) => {
  await page.goto('https://demo.seenons.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Sign-up here!' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*register/);
});

test('Registration Flow', (async ({ page }) => {
  const email = generateRandomEmail();
  await page.goto('https://demo.seenons.com/register')
  await page.getByPlaceholder('Enter your e-mail').fill(email);
  await page.getByLabel('I confirm that I have read, consent and agree to Seenons Terms & Conditions and Privacy Policy , and I am legally approved for ordering. I understand that I can change my communication preferences any time via  privacy@seenons.com .').check();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Password*', { exact: true }).fill('Test12345');
  await page.getByLabel('Confirm password*').fill('Test12345');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Enter your first name').fill('Test');
  await page.getByPlaceholder('Enter your last name').fill('User');
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByText('Thanks for signing up!')).toBeVisible();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByPlaceholder('Enter your e-mail').fill('testuser2@gmail.com');
  await page.getByPlaceholder('Enter your password').fill('Test12345');
  await page.getByRole('button', { name: 'Sign in' }).click();
}));