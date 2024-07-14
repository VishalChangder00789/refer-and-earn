const express = require("express");
const bodyParser = require("body-parser");
const { PrismaClient } = require("@prisma/client");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors());

// Use body-parser middleware
app.use(bodyParser.json());

app.get("/api/referrals", async (req, res) => {
  try {
    const referrals = await prisma.referral.findMany();
    res.status(200).json(referrals);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the referrals" });
  }
});

// Endpoint to handle referral form submission
app.post("/api/referrals", async (req, res) => {
  const { name, email, phone, referredBy, message } = req.body;

  

  // Basic validation
  if (!name || !email || !phone || !referredBy) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Save referral data to the database
    const newReferral = await prisma.referral.create({
      data: {
        name,
        email,
        phone,
        referredBy,
        message,
      },
    });

    // Send referral email
    // await sendReferralEmail(newReferral);

    res.status(201).json(newReferral);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Function to send referral email
async function sendReferralEmail(referral) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: referral.email,
    subject: "Referral Confirmation",
    text: `Thank you for your referral, ${referral.name}!`,
  };

  await transporter.sendMail(mailOptions);
}

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
