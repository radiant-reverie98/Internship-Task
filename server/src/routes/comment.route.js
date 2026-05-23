import express from "express";

import { addComment, getBlogComments } from "../controller/comment.controller.js";

import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();


// ADD COMMENT
router.post(
    "/create/:blogId",
    verifyToken,
    addComment
);

router.get("/:blogId",getBlogComments)




export default router;