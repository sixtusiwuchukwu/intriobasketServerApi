const mailgun = require('mailgun-js');
// const config = require('../config/index');
const mg = mailgun({
    apiKey: process.env.EMAIL_APIKEY, 
    domain: process.env.EMAIL_DOMAIN
});

module.exports= ({fullName, email, subject, template, link, title, copy, text}) =>{
    const sendEmail = mg.messages().send({
        from: "support@intriobasket.com",
        to: email,
        cc: copy,
        subject: subject,
        template: template,
        text: text,
        'v:title': title,
        'v:body': fullName,
        'v:link': link
    })
    return sendEmail
}