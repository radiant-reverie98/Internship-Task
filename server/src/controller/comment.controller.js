import pool from "../config/db.js";


// ADD COMMENT
export const addComment = async (req, res) => {

    try {

        // Blog ID
        const { blogId } = req.params;


        // Authenticated User ID
        const userId = req.userId;


        // Comment Text
        const { comment } = req.body;


        // Validation
        if (!comment || comment.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Comment is required",
            });
        }


        // Insert Query
        const addCommentQuery = `
            INSERT INTO comments
            (
                blog_id,
                user_id,
                comment
            )
            VALUES (?, ?, ?)
        `;


        // Execute Query
        const [result] = await pool
            .promise()
            .query(
                addCommentQuery,
                [
                    blogId,
                    userId,
                    comment,
                ]
            );


        // Success Response
        res.status(201).json({
            success: true,
            message: "Comment Added Successfully",
            commentId: result.insertId,
        });

    } catch (error) {

        console.error(
            "Add Comment Error:",
            error
        );

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

export const getBlogComments = async (req, res) => {

    try {

        // Blog ID
        const { blogId } = req.params;


        // Validation
        if (!blogId) {
            return res.status(400).json({
                success: false,
                message: "Blog ID is required",
            });
        }


        // SQL Query
        const getCommentsQuery = `
            SELECT
                comments.id,
                comments.comment,
                comments.created_at,

                users.name,
                users.avatar

            FROM comments

            INNER JOIN users
            ON comments.user_id = users.id

            WHERE comments.blog_id = ?

            ORDER BY comments.created_at DESC
        `;


        // Execute Query
        const [comments] = await pool
            .promise()
            .query(
                getCommentsQuery,
                [blogId]
            );


        // Success Response
        res.status(200).json({
            success: true,
            count: comments.length,
            comments,
        });

    } catch (error) {

        console.error(
            "Get Comments Error:",
            error
        );

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};