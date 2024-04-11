import pool from '../services/db.js'

export default class Post {
    constructor(owner, group, content, is_draft) {
        this.owner = owner;
        this.group = group;
        this.content = content;
        this.is_draft = is_draft || false;
    }

    static async getTrendingPosts(page = 1) {
        const client = await pool.connect();
        const limit = 5;
        const offset = (page - 1) * limit;

        try {
            const queryText = `
            SELECT *
            FROM "view_post_trending"
            WHERE ("parent" IS NULL AND "group" IS NULL)
              OR "is_public" = TRUE
            LIMIT $1 OFFSET $2;
          `;
            const values = [ limit, offset ];
            const result = await client.query(queryText, values);
            return result.rows;
        } finally {
            client.release();
        }
    }

    static async getNewestPosts(page = 1) {
        const client = await pool.connect();
        const limit = 5;
        const offset = (page - 1) * limit;
        
        try {
            const queryText = `SELECT * 
            FROM "view_post_newest"
                WHERE ("parent" IS NULL AND "group" IS NULL) 
                OR "is_public" = TRUE
                LIMIT $1 OFFSET $2;
                `;
            const values = [ limit, offset ];
            const result = await client.query(queryText, values);
            return result.rows;
        } finally {
            client.release()
        }
    }

    static async findById(postId) {
        const client = await pool.connect()
        try {
            const queryText = 'SELECT * FROM post WHERE id = $1'
            const values = [ postId ]
            const result = await client.query(queryText, values)
            return result.rows[ 0 ]
        } finally {
            client.release()
        }
    }

    static async create(data) {
        const client = await pool.connect()
        try {
            const queryText = 'INSERT INTO "post" (owner, group, content, is_draft) VALUES ($1, $2, $3, $4) RETURNING *';
            const values = [ this.owner, this.group, this.content, this.is_draft ]
            const result = await client.query(queryText, values)
            return result.rows[ 0 ]
        } finally {
            client.release()
        }
    }
}