import Link from 'next/link';
import Image from 'next/image';

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export function UserCard({ id, name, age, image }: Props) {
  return (
    <div className='p-4 rounded bg-gray-100'>
      <Image
        className='rounded-full'
        height={200}
        width={200}
        src={image || 'https://via.placeholder.com/150'}
        alt={name || 'Placeholder'}
      />

      <div>
        <h3 className='underline font-bold text-blue-600'>
          <Link href={`/users/${id}`}>
            {name}
          </Link>
        </h3>
        <p>Age: {age}</p>
      </div>
    </div>
  )
}
