import nodeMailer from "nodemailer";


 export const sendEmail = async (options) => {
    const transporter = nodeMailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.APP_EMAIL_ADDRESS,
            pass: process.env.APP_EMAIL_PASSWORD,
        },
    });
    const mailOptions = {
        from: process.env.APP_EMAIL_ADDRESS, // sender address
        to: options.email, // list of receivers
        subject: options.subject, // Subject line
        text: `${options.message} \n\n Email of User Who Sent The Message: ${options.userEmail}`, // html body
    }
    await transporter.sendMail(mailOptions);

}
