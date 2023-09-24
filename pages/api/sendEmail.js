const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, suggestions } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: process.env.APP_MAIL,
      auth: {
        user: process.env.APP_FROM_EMAIL, 
        pass: process.env.APP_PASS, 
      },
    });

    // Email data
    const mailOptions = {
      from: process.env.APP_FROM_EMAIL, 
      to: process.env.APP_TO_EMAIL, // The email address where you want to receive the message
      subject: "Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${suggestions}\nPhone: ${phone}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).send({message: "Email sent successfully"});
      }
    });
  } else {
    res.status(405).send("Method not allowed");
  }
}
