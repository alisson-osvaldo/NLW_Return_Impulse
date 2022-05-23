import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "110e10a3d847ed",
      pass: "0a82f0d0e2cdba"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Alisson Osvaldo <alisson.artigas@gmail.com>',
            subject: subject,
            html: body,
        });
    }
}