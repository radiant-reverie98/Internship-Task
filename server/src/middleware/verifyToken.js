import jwt from "jsonwebtoken";

const verifyUser = (req, res, next) => {

    try {

        const token = req.cookies.token;

        // Token Check
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized Access",
            });
        }


        // Verify Token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );


        // Store User ID
        req.userId = decoded.id;

        next();

    } catch (error) {

        console.error(error);

        res.status(401).json({
            success: false,
            message: "Invalid Token",
        });
    }
};

export default verifyUser;