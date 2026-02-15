"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function getUserByEmail() {

    const session = await  getServerSession();
    const email = session?.user?.email;

    if (!email) {
      return null;
    }

  return prisma.user.findUnique({
    where: { email },
  });
}

export async function deleteBookmark(id : string ) {
  return prisma.bookmark.delete({
    where: { id },
  });
}