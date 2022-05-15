const mailgun = require('mailgun-js');
const EmailTemplate = require("../emailTemplete/email");
const mg = mailgun({
    apiKey: process.env.EMAIL_APIKEY, 
    domain: process.env.EMAIL_DOMAIN
});


module.exports= ({fullName, email, subject, template, link, title, copy, text,html}) =>{
   
   
    const sendEmail = mg.messages().send({
        from: "support@intriobasket.com",
        to: email,
        cc: copy,
        subject: subject,
        // template: template,
        text: text,
        html:html,
        'v:title': title,
        'v:body': fullName,
        'v:link': link
    })
    return sendEmail
}