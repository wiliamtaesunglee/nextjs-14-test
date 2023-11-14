import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import FollowClient from "./FollowClient";

export default async function FollowButton({ targetUserId }: { targetUserId: string }) {
  const session = await getServerSession(authOptions);
  const currentUserId = await prisma.user
    .findUnique({ where: { email: session?.user?.email! }})
    .then((user) => user?.id);
    
    console.log('*******', targetUserId)

    const isFollowing = await prisma.follows?.findFirst({
      where: {
        followerId: currentUserId,
        followingId: targetUserId,
      },
    });

    // return <p>heelo</p>

    return <FollowClient targetUserId={targetUserId} isFollowing={!!isFollowing} />
}