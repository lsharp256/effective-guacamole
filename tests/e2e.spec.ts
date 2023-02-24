import { test, expect } from '@playwright/test';
import { generateRandomEmail } from '../utils';
import RegistrationPage from './Pages/registration.page';
import LoginPage from './Pages/login.page';

const email = generateRandomEmail();

test('Sign-up here link', async ({ page }) => {
  await page.goto('https://demo.seenons.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Sign-up here!' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*register/);
});

test('Registration new user flow', (async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  await registrationPage.goto();
  await page.getByPlaceholder('Enter your e-mail').fill('testuser6@gmail.com');
  await page.getByLabel('I confirm that I have read, consent and agree to Seenons Terms & Conditions and Privacy Policy , and I am legally approved for ordering. I understand that I can change my communication preferences any time via  privacy@seenons.com .').check();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Password*', { exact: true }).fill('Test12345');
  await page.getByLabel('Confirm password*').fill('Test12345');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Enter your first name').fill('Test');
  await page.getByPlaceholder('Enter your last name').fill('User');
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByText('Thanks for signing up!')).toBeVisible();
}));

test('Sign in and complete registration', (async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByPlaceholder('Enter your e-mail').fill('testuser6@gmail.com');
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
}));

// test('Invalid login details', (async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();
//   await page.getByRole('button', { name: 'Sign in' }).click();
//   await page.getByPlaceholder('Enter your e-mail').fill('bademail@gmail');
//   await page.getByPlaceholder('Enter your password').fill('Test12345');
//   await page.getByRole('button', { name: 'Sign in' }).click();

//   await expect(page.getByText('Please match the requested format.')).toBeVisible();
// }))