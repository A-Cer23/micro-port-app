import bcrypt from 'bcrypt';
import { InternalResponse } from '../types/InternalResponse';

export const user = {
    async register(username: string, password: string): Promise<InternalResponse> {
        // hashes password then stores info into db
        return new Promise(async (resolve, reject) => {
            if (username && password) {
                const hashedPassword = await bcrypt.hash(password, 10);
                resolve({ sucess: true, message: "User registered successfully" });
            } else {
                reject({ success: false, message: "Error during user registration" });
            }
        })
    },
    login(username: string, password: string): string {
        // checks username and password from db 
        // returns a session token or an error
        return "";
    },
}