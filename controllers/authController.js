const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const validator = require("validator");

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // 1️⃣ Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({ msg: "Invalid email format" });
    }

    // 2️⃣ Allow only Gmail
    if (!email.endsWith("@gmail.com")) {
      return res.status(400).json({ msg: "Only Gmail addresses allowed" });
    }

    // 3️⃣ Check if email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // 4️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5️⃣ Create user but set isVerified=false
    const user = await User.create({ name, email, password: hashedPassword, role, isVerified: false });

    // 6️⃣ Send verification email
    const verifyToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    const verifyLink = `${process.env.BASE_URL}/api/auth/verify/${verifyToken}`;

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Verify your account",
      html: `<h3>Hello ${name}</h3><p>Verify your email: <a href="${verifyLink}">Click Here</a></p>`,
    });

    res.status(201).json({ msg: "Registered successfully. Check your Gmail to verify your account." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findByPk(decoded.id);
    if (!user) return res.status(400).json({ msg: "Invalid token" });

    user.isVerified = true;
    await user.save();

    res.json({ msg: "Email verified. You can login now." });
  } catch (err) {
    res.status(400).json({ msg: "Invalid or expired token" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Check valid email format
    if (!validator.isEmail(email)) return res.status(400).json({ msg: "Invalid email format" });

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ msg: "Invalid credentials" });

    if (!user.isVerified) return res.status(403).json({ msg: "Verify your email first" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ msg: "Invalid credentials" });

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user.id),
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
