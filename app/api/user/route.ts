import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const session = await getServerSession();

    return NextResponse.json({
        session
    })
}

// export async function POST(req: Request) {
//  const body = await req.json();
//  const {email} = body;

//  if(!email) {
//   return NextResponse.json({ error: "Email is required" }, { status: 400 });
//  }
//   const user = await prisma.user.findUnique({
//       where: { email },
//     });
//     if (!user) {
//       return Response.json(
//         { error: "User not found" },
//         { status: 404 }
//       );
//     }

//     return Response.json(user);
// }