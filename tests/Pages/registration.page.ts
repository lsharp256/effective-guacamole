import { expect, Locator, Page } from "@playwright/test";

export default class RegistrationPage {
    page: Page;
    signInButton: Locator;


constructor(page: Page) {
    this.page = page;
}

async goto() {
    await this.page.goto('https://demo.seenons.com/register');
    }

async logout() {
    await this.page.goto('https://demo.seenons.com/logout')
    }
}

