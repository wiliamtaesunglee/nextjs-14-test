import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { Container } from '@/components/Container';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions);

  console.log(session);

  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <main>
      <Container>
        <p>hello my mundo</p>
      </Container>
    </main>
  )
}
