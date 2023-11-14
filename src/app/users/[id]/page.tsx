import { Container } from '@/components/Container';
import FollowButton from '@/components/FollowButton';
import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';
import Image from 'next/image';

interface Props {
  params: {
    id: string;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return {title: `User profile of ${user?.name}`};
}

export default async function UserProfle({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image, id } = user ?? {};
  
  return (
    <Container>
      <h1 className='text-3xl font-medium mb-2'>{name}</h1>
      <Image
        className='rounded-full'
        width={200}
        height={200}
        src={image ?? 'https://loremflickr.com/640/360'}
        alt={`Profile picture of ${name}`}
      />

      <h3 className='text-2xl mt-2 mb-1'>Bio</h3>
      <p>{bio}</p>


      <FollowButton targetUserId={id!} />
    </Container>
  )
}
