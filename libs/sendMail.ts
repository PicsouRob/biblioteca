import { Resend } from 'resend';
import Handlebars from "handlebars";

import { emailTemplate } from './emailTemplate';

interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
    subject: string;
}

const apiKey = process.env.RESEND_API_KEY as string;
const resend = new Resend("re_5TqYwJQ3_5uGuFJBge29AtBJ5qDQqMgA9");

export const sendMail = async (
    { name, email, message, subject }: EmailTemplateProps
) => {
    try {
        const template: HandlebarsTemplateDelegate<any> = Handlebars.compile(emailTemplate);
        const data: EmailTemplateProps = {
            "name": name,
            "email": email,
            "message": message,
            "subject": subject,
        }
        const htmlBody: string = template(data);

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'www.phanordpicsouroberto11@gmail.com',
            subject: subject,
            html: htmlBody
        });
    } catch (error: any) {
        console.log(error.message);
    }
}