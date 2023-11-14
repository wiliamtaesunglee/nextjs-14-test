'use client'

import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";

interface Props {
  targetUserId: string;
  isFollowing: boolean;
}

export default function FollowClient({ targetUserId, isFollowing }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;

  const follow = async () => {
    setIsFetching(true);
    await fetch(`/api/follow`, {
      method: "POST",
      body: JSON.stringify({ targetUserId }),
      headers: {
          'Content-Type': 'application/json'
      },
    });
    setIsFetching(false);
    startTransition(() => {
      router.refresh();
    });
  }

  const unfollow = async () => {
    setIsFetching(true);

    await fetch(`/api/follow?targetUserId=${targetUserId}`, {
      method: "DELETE",
    });

    setIsFetching(false);
    startTransition(() => router.refresh());
  }

  if (isFollowing) {
    return (
      <button onClick={unfollow}>
        {!isMutating ? "Unfollow" : "Unfollowing..."}
      </button>
    )
  } else {
    return (
      <button onClick={follow}>
        {!isMutating ? "Follow" : "Following..."}
      </button>
    )
  }
}