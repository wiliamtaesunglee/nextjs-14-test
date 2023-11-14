import { signOut } from 'next-auth/react';

export function SignOutButton() {
  return <button className='bg-gray-400 text-xs hover:bg-gray-300 hover:text-gray-800 font-normal p-1 rounded' onClick={() => signOut()}>Sign out</button>;
}
