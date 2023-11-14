'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { SignOutButton } from './SignOutButton';

export function SignInButton() {
  const { data: session, status } = useSession();
  
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'authenticated') {
    return (
    <div className='flex flex-row gap-2'>
      <div className='rounded-full w-7 h-7 overflow-hidden'>
        <Link href={'/dashboard'}>
          <Image
            src={session.user?.image ?? 'https://loremflickr.com/640/360'}
            width={30}
            height={30}
            alt='Your Name'
          />
        </Link>
      </div>
      <SignOutButton />
    </div>
    );
  }

  return <button 
    className='bg-gray-400 text-xs hover:bg-gray-300 hover:text-gray-800 font-normal p-1 rounded' 
    onClick={() => signIn()}>
      Sign In
    </button>;
}
