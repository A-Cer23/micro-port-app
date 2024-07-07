import bcrypt from 'bcrypt';
import { InternalResponse } from '../types/InternalResponse';
import { db } from './db';

export const user = {
    async register(username: string, password: string): Promise<InternalResponse> {
        return new Promise(async (resolve, reject) => {
            if (!username || !password) reject({ success: false, message: "No username or password" });

            const hashedPassword = await bcrypt.hash(password, 10);

            try {
                const response = await db.createUser(username, hashedPassword);
                resolve(response);
            } catch (error) {
                reject(error);
            };
        });
    },

    login(username: string, password: string): string {
        // checks username and password from db 
        // returns a session token or an error
        return "";
    },
}