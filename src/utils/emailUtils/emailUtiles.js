const nodeMailer = require("nodemailer");
const EmailTemplate = require("../emailTemplete/email");
const smtpTransport = require("nodemailer-smtp-transport");


// const { SendInvoice } = require("../../invoiceTemplate/createInvoice");
class EmailUtils {
  constructor(serviceName) {
    this.serviceName = serviceName;
  }

  async sendMail(emails, message, subject, from) {
    dev
      ? await this.mailerTester(emails, message, subject, from)
      : await this.mailer(emails, message, subject, from);
  }

  async mailer(emails, message, subject, from) {
    let transporter = nodeMailer.createTransport(
      smtpTransport({
        host: "server187.web-hosting.com",
        secureConnection: true,
        tls: {
          rejectUnauthorized: false,
        },
  
        port: 587,
      // process.env.MAIL_EMAIL
      auth: {
        user: process.env.MAIL_EMAIL, // generated ethereal users

        pass: process.env.MAIL_PASSWORD, // generated ethereal password
      },
      tls: { rejectUnauthorized: false },
  }))

    // send mail with defined transport object
     transporter.sendMail(
      {
        from: `IntrioBasket <${from}>`, // sender address
        bcc: `${emails}`, // list of receivers
        subject: subject, // Subject line
        html: message, // html body
      },
      function (error, info) {
        if (error) {
          console.log(error, "from email");
          return;
        }

        console.log(`Sent -> ${info.response}`);
        return `${info} Email sent successfully`;
      }
    );
  }

  async mailerTester(emails, message, subject, from) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodeMailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodeMailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587, // true for 465, false for other ports
      auth: {
        user: "kjbutbwleeog7qoj@ethereal.email", // generated ethereal user
        pass: "Fa15hbVyuxW1mPXnkP", // generated ethereal password
      },
    });

    // send mail with defined transport object
    await transporter.sendMail({
      from: '"welcome " <info@mgoldservices.com>', // sender address
      to: from, // list of receivers
      subject: subject, // Subject line
      html: message, // html body
    });
  }

  async getTemplate(template, data = {}) {
    const acceptedType = [
      "verification",
      "transaction",
      "notification",
      "forgotPassword",
      "resetPassword",
      "resendCode",
      "confirmPasswordReset",
      "accountActivation",
      "accountDeactivation",
      "PaymentInvoice",
      "Welcome",
    ];
    if (!acceptedType.includes(template))
      throw new Error(
        `Unknown email template type expected one of ${acceptedType} but got ${template}`
      );
    return data;
  }

  async EmailInvoice(data, emails, subject) {
    // const result = await this.getTemplate(template, data);
    await SendInvoice(data, emails, subject);
  }

  async mailSend(template, data, emails, subject, from) {
    const result = await this.getTemplate(template, data);

    let { fullName, message, verificationLink, actionText } = result;

    message = EmailTemplate(fullName, message, verificationLink, actionText);
    // await this.mailer(emails, message, subject, from);
    await this.mailer(emails, message, subject, from);
  }
}

module.exports = EmailUtils;
