
export const session = {
    generateToken(userId: number, username: string): string {
        // returns a generate jwt and saves to db
        return "";
    },
    refreshToken(token: string): string {
        // refreshes token expirey and saves to db
        return "";
    },
    getUsername(token: string): string {
        // returns the username from the token
        return "";
    }
}