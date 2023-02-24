import { expect, Locator, Page } from "@playwright/test";

export default class LoginPage {
    page: Page;
    signInButton: Locator;

constructor(page: Page) {
    this.page = page;
}

async goto() {
    await this.page.goto('https://demo.seenons.com/login');
    }

async logout() {
    await this.page.goto('https://demo.seenons.com/logout')
    }
}

