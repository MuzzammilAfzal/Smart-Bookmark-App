import { getUserByEmail } from "@/actions/user";
import { prisma } from "@/lib/prisma";


export async function POST(req: Request) {
  const user = await getUserByEmail();
  const userId = user?.id;
  
  const body = await req.json();

  const { title, url } = body;
  

  const bookmark = await prisma.bookmark.create({
    data: {
      title,
      url,
      user:{
        connect: { id: userId }
      },
    },
  });

  return Response.json(bookmark);
}


export async function GET(req: Request) {
  return Response.json({ message: "GET request received" });
}