import pg from 'pg';
import { InternalResponse } from '../types/InternalResponse';

const { Pool } = pg;

const pool = new Pool({
    user: 'postgres',
    host: 'auth_db',
    database: 'auth',
    password: 'postgres',
    port: 5432,
})

const querys = {
    createUser: 'INSERT INTO "user" (username, password) VALUES ($1, $2)',
}

async function query(query: string, values: any[]): Promise<pg.QueryResult | InternalResponse> {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await pool.query(query, values);
            resolve(res);
        } catch (error) {
            const err = JSON.parse(JSON.stringify(error)).detail as string;
            reject({ success: false, message: err });
        }
    })
}

export const db = {
    async createUser(username: string, hashedPassword: string): Promise<InternalResponse> {
        return new Promise(async (resolve, reject) => {
            try {
                await query(querys.createUser, [username, hashedPassword]);
                resolve({ success: true, message: 'User created' });
            } catch (error) {
                reject(error);
            }
        });
    },
}