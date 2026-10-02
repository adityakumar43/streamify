import User from "../models/User";

export async function signup(req, res) {
    const { email, password, fullName } = req.body;
    try {
        if (!email || !password || !fullName) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (passworrd.length < 6) {
            return res.status(400).json({ message: "Password must be at least " })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        const existingUser = await User.findOne({email});

        

    } catch (error) {

    }
}