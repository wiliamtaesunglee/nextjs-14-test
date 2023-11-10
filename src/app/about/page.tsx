export const dynamic = 'force-static'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'This is the about page',
}

export default async function about() {
  return (
    <main className='mt-8 w-full max-w-6xl mx-auto'>
      <h1 className='text-3xl'>About</h1>
      <p>This is the about page</p>
    </main>
  )
}
