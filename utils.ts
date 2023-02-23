export function generateRandomEmail(): string {
    const randomString = Math.random().toString(36).substring(2);
    const randomEmail = `user-${randomString}@example.com`;
    return randomEmail;
}