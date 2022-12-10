var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "yahoo",
  host: "smtp.mail.yahoo.fr",
  port: 465,
  secure: false,
  auth: {
    user: "test@yahoo.fr",
    pass: "test",
  },
  debug: false,
  logger: true,
});

var mailOptions = {
  from: "brahimmaghraoui@yahoo.fr",
  to: "ibrahimmaghraoui2022@gmail.com",
  subject: "Sending Email using Node.js",
  text: "bonjour c'est moi test node",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
