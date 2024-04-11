import pool from '../services/db.js'

export default class User {
    constructor(username, name, password) {
        this.username = username
        this.name = name
        this.password = password
    }

    async save() {
        const client = await pool.connect()
        try {
            const queryText = 'INSERT INTO "user" (name, username, password) VALUES ($1, $2, $3) RETURNING *';
            const values = [ this.name, this.username, this.password ]
            const result = await client.query(queryText, values)
            return result.rows[ 0 ]
        } finally {
            client.release()
        }
    }

    static async findById(userId) {
        const client = await pool.connect()
        try {
            const queryText = 'SELECT * FROM "user" WHERE id = $1'
            const values = [ userId ]
            const result = await client.query(queryText, values)
            return result.rows[ 0 ]
        } finally {
            client.release()
        }
    }

    static async findByUsernameAndPassword(username, password) {
        const client = await pool.connect()
        try {
            const queryText = 'SELECT * FROM "user" WHERE username = $1 AND password = $2';
            const values = [username, password ]
            const result = await client.query(queryText, values)
            return result.rows[ 0 ]
        } finally {
            client.release()
        }
    }

    static async findByUsername(username) {
        const client = await pool.connect()
        try {
            const queryText = 'SELECT * FROM "user" WHERE username = $1';
            const values = [username]
            const result = await client.query(queryText, values)
            return result.rows[ 0 ]
        } finally {
            client.release()
        }
    }
    
}
