import Link from 'next/link';

export default function NavMenu() {
  return (
    <nav className='w-full p-2 bg-sky-400 flex items-center justify-center'>
      <div className='w-full max-w-6xl flex text-xl text-white font-semibold flex flex-row items-center justify-between'>
        <Link className='w-full' href={'/'}>Home</Link>
        <ul className='w-full flex items-center flex-row justify-between max-w-xs'>
          <li><Link href={'/about'}>About</Link></li>
          <li><Link href={'/blog'}>Blog</Link></li>
          <li><Link href={'/blog'}>Users</Link></li>
        </ul>
      </div>
    </nav>
  );
}
