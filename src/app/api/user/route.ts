import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email!;
  
  const data = await req.json();
  data.age = Number(data.age);

  const user = await prisma.user.update({
    where: { email: currentUserEmail },
    data
  });
  
  return NextResponse.json(user);
}