import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.seenons.com/');
  await page.getByRole('link', { name: 'Sign-up here!' }).click();
  await page.getByPlaceholder('Enter your e-mail').click();
  await page.getByPlaceholder('Enter your e-mail').fill('testuser6@gmail.com');
  await page.getByLabel('I confirm that I have read, consent and agree to Seenons Terms & Conditions and Privacy Policy , and I am legally approved for ordering. I understand that I can change my communication preferences any time via  privacy@seenons.com .').check();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Password*', { exact: true }).click();
  await page.getByLabel('Password*', { exact: true }).fill('Test12345');
  await page.getByLabel('Password*', { exact: true }).press('Tab');
  await page.getByLabel('Confirm password*').fill('Test12345');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Enter your first name').click();
  await page.getByPlaceholder('Enter your first name').fill('Test');
  await page.getByPlaceholder('Enter your last name').click();
  await page.getByPlaceholder('Enter your last name').fill('User');
  await page.getByRole('button', { name: 'Register' }).click();
  
  
  await page.getByRole('button', { name: 'Sign in' }).click();  
  await page.getByPlaceholder('Enter your e-mail').click();
  await page.getByPlaceholder('Enter your e-mail').fill('testuser6@gmail.com');
  await page.getByPlaceholder('Enter your e-mail').press('Tab');
  await page.getByPlaceholder('Enter your password').fill('Test12345');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Contact Details' }).click();
  await page.getByPlaceholder('Enter your phone number').click();
  await page.getByPlaceholder('Enter your phone number').fill('0112234567');
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByPlaceholder('Enter name').click();
  await page.getByPlaceholder('Enter name').fill('Test Business');
  await page.getByPlaceholder('Enter your street').click();
  await page.getByPlaceholder('Enter your street').fill('Test Street');
  await page.getByPlaceholder('Enter your house number').click();
  await page.getByPlaceholder('Enter your house number').fill('30');
  await page.getByPlaceholder('Enter your postal code').click();
  await page.getByPlaceholder('Enter your postal code').fill('7130');
  await page.getByPlaceholder('Enter your city').click();
  await page.getByPlaceholder('Enter your city').fill('Amsterdam');
  await page.getByRole('combobox', { name: 'Country*' }).selectOption('NL');
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('link').click();
});