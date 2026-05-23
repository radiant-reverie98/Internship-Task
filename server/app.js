import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import authRoutes from "./src/routes/auth.routes.js"
const app = express();


// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.get("/", (req, res) => {
    res.send("API Running...");
});

app.use("/api/auth",authRoutes)


export default app;