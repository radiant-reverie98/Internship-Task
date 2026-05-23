import express from "express";

import { createBlog,getAllBlogs,getSingleBlog } from "../controller/blog.controller.js";

import verifyToken from "../middleware/verifyToken.js";

import upload from "../middleware/multer.js";

const router = express.Router();


// CREATE BLOG
router.post(
    "/create",
    verifyToken,
    upload.single("image"),
    createBlog
);

router.get("/all",getAllBlogs)
router.get("/:id",getSingleBlog)

export default router;