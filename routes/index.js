const router = require("express").Router();
const nodemailer = require('nodemailer');
const path = require("path");
require("dotenv").config()

// router.route("/api/submit")
//   .post(function (req, res) {
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 587,
//       auth: {
//         user: "fernandorivascastillo011@gmail.com",
//         pass: process.env.EMAIL_PW
//       },
//     });
//     const mailOptions = {
//       from: req.body.email,
//       to: "fernandorivascastillo011@gmail.com",
//       subject: 'Portfolio message from: ' + req.body.name,
//       text: req.body.text
//     };
//     transporter.sendMail(mailOptions, function (error, data) {
//       if (error) {
//         console.log(error);
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     });
//   })

// router.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });
module.exports = router;