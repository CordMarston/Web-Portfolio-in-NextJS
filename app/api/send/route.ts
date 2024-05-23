import { ContactEmail } from "@/app/components/emails/Contact";
import { ContactInternal } from "@/app/components/emails/ContactInternal";
import { NextRequest } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const firstEmail = async (info: { name: any; email: any;}) => {
    return await resend.emails.send({
        from: 'Cord <cord@cordmarston.com>',
        to: [info.email],
        subject: 'Thanks for reaching out!',
        react: ContactEmail({ name: info.name }),
    });
}

const secondEmail = async (info: { name: any; email: any; message: any; }) => {
    return await resend.emails.send({
        from: 'Cord <cord@cordmarston.com>',
        to: ['marston.cord@gmail.com'],
        subject: 'A visitor reached out!',
        react: ContactInternal({ name: info.name, email: info.email, message: info.message }),
    });
}

export async function POST(request: NextRequest) {
    const info = await request.json();
    try {
        let fE = firstEmail(info);
        let sE = secondEmail(info);
        return Response.json({first: fE, second: sE});
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}