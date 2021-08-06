require("dotenv").config();
const path = require("path");
const ejs = require("ejs");
const nodemailer = require("nodemailer");

//Create transporter for sending mails
let transporter = nodemailer.createTransport({
  host: process.env.emailSMTP,
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.usernameEmail,
    pass: process.env.passwordEmail
  }
});

/**
 * Sends email to admin for comment
 *
 * @param {Object} obj Object
 * @return {*} mailInfo Object
 */
const SendEmail = obj => {
  return new Promise(async (res, rej) => {
    let dir = path.join(__dirname, "EmailTemplates", obj.template);
    ejs.renderFile(dir, obj, async (err, data) => {
      if (err) {
        rej(err);
      }
      try {
        let mailInfo = await transporter.sendMail({
          from: '"Super Web Team" <' + process.env.usernameEmail + ">",
          to: ["behon.baker@yahoo.com"],
          replyTo: process.env.usernameEmail,
          subject: "** New Comment From Visitor **",
          html: data
        });
        res(mailInfo);
      } catch (error) {
        rej(error);
      }
    });
  });
};

//Export functions
module.exports = { SendEmail };
