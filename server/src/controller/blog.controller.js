import pool from "../config/db.js";


// CREATE BLOG
export const createBlog = async (req, res) => {

    try {

        const {
            title,
            excerpt,
            content,
            category,
        } = req.body;


        // Uploaded Image URL
        const image = req.file?.path;


        // Authenticated user
        const userId = req.userId;


        // Validation
        if (
            !title ||
            !excerpt ||
            !content ||
            !category ||
            !image
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }


        // Insert Query
        const createBlogQuery = `
            INSERT INTO blogs
            (
                title,
                excerpt,
                content,
                image,
                category,
                author_id
            )
            VALUES (?, ?, ?, ?, ?, ?)
        `;


        // Execute Query
        const [result] = await pool
            .promise()
            .query(
                createBlogQuery,
                [
                    title,
                    excerpt,
                    content,
                    image,
                    category,
                    userId,
                ]
            );


        res.status(201).json({
            success: true,
            message: "Blog Created Successfully",
            blogId: result.insertId,
        });

    } catch (error) {

        console.error("Create Blog Error:", error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};


// GET ALL BLOGS

export const getAllBlogs = async (req, res) => {

    try {

        // SQL Query
        const getBlogsQuery = `
            SELECT
                blogs.id,
                blogs.title,
                blogs.excerpt,
                blogs.image,
                blogs.category,
                blogs.created_at,

                users.name AS author_name,
                users.avatar AS author_avatar

            FROM blogs

            INNER JOIN users
            ON blogs.author_id = users.id

            ORDER BY blogs.created_at DESC
        `;


        // Execute Query
        const [blogs] = await pool
            .promise()
            .query(getBlogsQuery);


        // Success Response
        res.status(200).json({
            success: true,
            count: blogs.length,
            blogs,
        });

    } catch (error) {

        console.error("Get All Blogs Error:", error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};


// SINGLE BLOG

export const getSingleBlog = async (req, res) => {

    try {

        // Blog ID
        const { id } = req.params;


        // Validation
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Blog ID is required",
            });
        }


        // SQL Query
        const getBlogQuery = `
            SELECT
                blogs.id,
                blogs.title,
                blogs.excerpt,
                blogs.content,
                blogs.image,
                blogs.category,
                blogs.created_at,

                users.name AS author_name,
                users.avatar AS author_avatar,
                users.bio AS author_bio

            FROM blogs

            INNER JOIN users
            ON blogs.author_id = users.id

            WHERE blogs.id = ?
        `;


        // Execute Query
        const [blogs] = await pool
            .promise()
            .query(
                getBlogQuery,
                [id]
            );


        // Blog Not Found
        if (blogs.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Blog not found",
            });
        }


        // Success Response
        res.status(200).json({
            success: true,
            blog: blogs[0],
        });

    } catch (error) {

        console.error(
            "Get Single Blog Error:",
            error
        );

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};