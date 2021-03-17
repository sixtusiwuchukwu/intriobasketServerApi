const nodeMailer = require("nodemailer");
const EmailTemplate = require("../emailTemplete/email");

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
    let transporter = nodeMailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      host: "smtp.gmail.com",
      // process.env.MAIL_EMAIL
      auth: {
        user: "sixtusiwuchukwu21@gmail.com", // generated ethereal users

        pass: "@sixtus4545", // generated ethereal password
      },
      tls: { rejectUnauthorized: false },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail(
      {
        from: `Shopwitbee <${from}>`, // sender address
        bcc: `${emails}`, // list of receivers
        subject: subject, // Subject line
        html: message, // html body
      },
      function (error, info) {
        if (error) {
          console.log(error, "from here");
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
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Account Activation " <info@mgoldservices.com>', // sender address
      to: from ? "iinfo@mgoldservices.com" : emails, // list of receivers
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
    await this.mailer(emails, message, subject, from);
  }
}

module.exports = EmailUtils;
