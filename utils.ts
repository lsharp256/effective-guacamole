export function generateRandomEmail(): string {
    const randomString = Math.random().toString(36).substring(2);
    const randomEmail = `user-${randomString}@example.com`;
    return randomEmail;
}

export const email: string = 'example4@example.com';
export const password: string = 'Test12345';