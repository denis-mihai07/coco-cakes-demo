const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

function sendEmail({ senderName, senderEmail, userMessage, phoneNumber }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "contact.cococakes@gmail.com",
      pass: "otuj hstj eway xquo",
    },
  });

  const emailTemplatePath = path.join(__dirname, "email_template.html");
  const emailHtml = fs.readFileSync(emailTemplatePath, "utf8");

  const currentDate = new Date();

  const messageDate = currentDate
    .toLocaleString("ro-RO", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })
    .replace(/(?<=\d)\./g, "/");

  const html = emailHtml
    .replace("{{sender_name}}", senderName)
    .replace("{{sender_email}}", senderEmail)
    .replace("{{message_content}}", userMessage)
    .replace("{message_date}", messageDate);

  const mailOptions = {
    from: "contact.cococakes@gmail.com",
    to: "birtalanmihaidenis@gmail.com",
    subject: "Contact Message from Coco Cakes Website",
    html: html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log("Eroare:", error);
    }
    console.log("Email trimis:", info.response);
  });
}

module.exports = sendEmail;
