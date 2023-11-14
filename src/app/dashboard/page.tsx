import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { Container } from '@/components/Container';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { ProfileForm } from '@/app/dashboard/ProfileForm';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  const currentUserEmail = session?.user?.email!;
  const user = await prisma.user.findUnique({ where: { email: currentUserEmail } });

  return (
    <Container>
      <h1 className='text-3xl'>Dashboard</h1>
      <ProfileForm user={user} />
    </Container>
  )
}
