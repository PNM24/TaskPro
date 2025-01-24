import nodemailer from "nodemailer";
import { configDotenv } from "dotenv";

configDotenv({ path: "././.env" });

const nodemailerConfig = {
  host: "smtp.gmail.com", 
  port: 587, 
  secure: false, 
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

function sendConfirmRegistrationEmail(toWhom, verificationToken) {
  const emailOptions = {
    from: process.env.GMAIL_EMAIL,
    to: toWhom,
    subject: "Confirm Registration",
    text: `Hello ! \nIn order to confirm your email, you should access the following link: http://localhost:3000/api/users/verify/${verificationToken}`,
    html: `
      <b>Hello !</b>
      <p> In order to confirm your email, you should press here:
        <a href="http://localhost:3000/api/users/verify/${verificationToken}">Confirm your email</a>
      </p>
      `,
  };

  transporter
    .sendMail(emailOptions)
    .then(() => console.log(`Email sent succesfully to: ${toWhom}`))
    .catch((error) => console.error(error));
}

export default sendConfirmRegistrationEmail;
