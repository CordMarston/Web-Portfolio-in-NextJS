
import { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
    const info = await request.json();
    const session = await auth();
    if(session && session.user) {
        const post = await prisma.post.create({
            data: {
                title: info.title,
                body: info.content,
                authorId: session.user.id
            },
        });
    } 

    try {
        return Response.json({'post' : 'success'});
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}