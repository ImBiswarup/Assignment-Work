const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/users');
const generateAuthToken = require('../middleware/generateToken');

const signupHandler = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.json({ msg: "Please provide a name and email to continue" });
        }

        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.json({ msg: 'User already exists', status: 'error' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        // Generate token
        const token = jwt.sign({ userId: newUser._id }, 'your_jwt_secret', { expiresIn: '1h' });
        newUser.token = token;
        await newUser.save();

        // Set cookie
        res.cookie('token', token, { httpOnly: true });

        return res.json({ msg: 'User created successfully', status: 'success', user: newUser });
    } catch (error) {
        return res.json({ msg: "Signup failed", error: error.message });
    }
};


const loginHandler = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email: email });
        if (!existingUser) {
            return res.json({ msg: 'User not found', status: 'error' });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (isPasswordValid) {
            // Generate token
            const token = jwt.sign({ userId: existingUser._id }, 'your_jwt_secret', { expiresIn: '1h' });
            existingUser.token = token;
            await existingUser.save();

            // Set cookie
            res.cookie('token', token, { httpOnly: true });

            return res.json({ msg: "Login successful", status: 'success', user: existingUser });
        } else {
            return res.json({ msg: 'Invalid credentials', status: 'error' });
        }
    } catch (error) {
        return res.json({ msg: "Login failed", error: error.message });
    }
};


const logoutHandler = async (req, res) => {
    try {
        const { token } = req.cookies;

        const user = await User.findOneAndUpdate({ token }, { token: null });

        if (user) {
            res.clearCookie('token');
            return res.json({ msg: "Logout successful", status: 'success' });
        } else {
            return res.json({ msg: "Logout failed: User not found", status: 'error' });
        }
    } catch (error) {
        return res.json({ msg: "Logout failed", error: error.message });
    }
};

module.exports = { signupHandler, loginHandler, logoutHandler };
