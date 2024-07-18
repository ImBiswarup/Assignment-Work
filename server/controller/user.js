const bcrypt = require('bcryptjs');
const User = require('../model/users');
const generateAuthToken = require('../middleware/generateToken');

const signupHandler = async (req, res) => {
    try {
        // console.log("req.body: ", req.body);
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({ msg: "Please provide a name and email to continue" })
        }

        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.json({ msg: 'User already exists', status: 'error' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password: hashedPassword });

        req.user = newUser;
        await generateAuthToken(req, res, () => {
            return res.json({ msg: 'User created successfully', status: 'success', user: newUser, token: req.token });
        });
    } catch (error) {
        return res.json({ msg: "Signup failed", error: error.message });
    }
};

const loginHandler = async (req, res) => {
    try {
        // console.log(req.body);
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email: email });
        if (!existingUser) {
            return res.json({ msg: 'User not found', status: 'error' });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (isPasswordValid) {
            req.user = existingUser;
            await generateAuthToken(req, res, () => {
                return res.json({ msg: "Login successfull", status: 'success', user: existingUser, token: req.token });
            });
        } else {
            return res.json({ msg: 'Invalid credentials', status: 'error' });
        }
    } catch (error) {
        return res.json({ msg: "Login failed", error: error.message });
    }
};

module.exports = { signupHandler, loginHandler };
