import pool from "../config/db.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const registerUser = (req, res) => {

    try {

        const { name, email, password } = req.body;


        // Validation
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }


        // Check Existing User
        const checkUserQuery =
            "SELECT * FROM users WHERE email = ?";


        pool.query(checkUserQuery, [email], async (error, result) => {

            if (error) {
                console.error(error);

                return res.status(500).json({
                    success: false,
                    message: "Internal Server Error",
                });
            }


            // User Already Exists
            if (result.length > 0) {
                return res.status(400).json({
                    success: false,
                    message: "User already exists",
                });
            }


            // Hash Password
            const hashedPassword = await bcrypt.hash(password, 10);


            // Insert User
            const insertUserQuery = `
                INSERT INTO users(name, email, password)
                VALUES(?, ?, ?)
            `;

            pool.query(
                insertUserQuery,
                [name, email, hashedPassword],
                (error, result) => {

                    if (error) {
                        console.error(error);

                        return res.status(500).json({
                            success: false,
                            message: "Internal Server Error",
                        });
                    }


                    // Generate JWT
                    const token = jwt.sign(
                        {
                            id: result.insertId,
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: "7d",
                        }
                    );


                    // Set Cookie
                    res.cookie("token", token, {
                        httpOnly: true,
                        secure: false,
                        sameSite: "lax",
                        maxAge: 7 * 24 * 60 * 60 * 1000,
                    });


                    res.status(201).json({
                        success: true,
                        message: "User Registered Successfully",
                    });
                }
            );
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

export const loginUser = (req, res) => {

    try {

        const { email, password } = req.body;


        // Validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }


        // Find User
        const findUserQuery =
            "SELECT * FROM users WHERE email = ?";


        pool.query(findUserQuery, [email], async (error, result) => {

            if (error) {
                console.error(error);

                return res.status(500).json({
                    success: false,
                    message: "Internal Server Error",
                });
            }


            // User Not Found
            if (result.length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid Email or Password",
                });
            }


            const user = result[0];


            // Compare Password
            const isPasswordMatched =
                await bcrypt.compare(password, user.password);


            if (!isPasswordMatched) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid Email or Password",
                });
            }


            // Generate JWT
            const token = jwt.sign(
                {
                    id: user.id,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "7d",
                }
            );


            // Set Cookie
            res.cookie("token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });


            res.status(200).json({
                success: true,
                message: "Login Successful",
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    avatar: user.avatar,
                },
            });
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};