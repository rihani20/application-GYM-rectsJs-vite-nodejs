
import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

// Load environment variables from .env file
config({ path: "./.env" });

// Middleware
app.use(cors({
    origin: [process.env.URL_FRONTEND],
    methods: ['POST'],
    credentials: true
}))

// to parse JSON bodies
app.use(express.json())
// to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }))

router.post('/api/send/email', async (req, res, next) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return next(
            res.status(400).json({
                success: false,
                message: "Please provide all details"
            })
        )
    }

    try {
        await sendEmail({
            email: "rihaniibrahim4@gmail.com",
            subject: "GYM WEBSITE CONTACT ",
            message,
            userEmail: email,
        });
        res.status(200).json({
            success: true,
            message: "Message Sent Successfully.",
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: error,
        });
    }


})



// Use the router
app.use(router)

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`)
})