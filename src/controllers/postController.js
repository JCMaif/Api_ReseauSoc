import Post from '../models/Post.js';
import User from '../models/User.js';

export const postController = {
    async getTrendings(req, res) {
        const pageNumber = req.query.page;
        const result = await Post.getTrendingPosts(pageNumber)
            .catch(error => {
                res.status(500).send("Erreur")
            })
        if (result) {
            return res.status(200).json(result)
        }
    },

    async getNewest(req, res) {
        const pageNumber = req.query.page;
        const result = await Post.getNewestPosts(pageNumber)
            .catch(error => {
                res.status(500).send("Erreur")
            })
        if (result) {
            return res.status(200).json(result)
        }
    },

    async findOnePost(req, res) {
        const postId = req.params.id
        const result = await Post.findById(postId)
            .catch(error => {
                res.status(500).send("Erreur")
            })
        if (result) {
            return res.status(200).json(result)
        }
    },

    async createPost(req, res, next) {
        const { group, content } = req.body;
        try {
            // find the user
            const owner = await User.findById(req.userId);
            // create the post
            const postCreated = await Post.create({
                owner,
                group,
                content
            });
        } catch (error) {
            res.status(500).send("Erreur")
        }
    if(result) {
        return res.status(200).json(result)
    }
}
}