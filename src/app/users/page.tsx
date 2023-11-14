import { prisma } from '@/lib/prisma';
import { Container } from '@/components/Container';
import { UserCard } from '@/components/UserCard';

export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <Container>
      <div className='w-full flex flex-row gap-4 flex-wrap'>
        {users.map((user) => (<UserCard key={user.id} {...user} />))}
      </div>
    </Container>
  );
}
