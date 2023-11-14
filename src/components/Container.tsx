import { ReactNode } from 'react'

export const Container = ({ children }: { children: ReactNode }) => {

  return (
    <div className='w-full p-2 flex items-center justify-center'>
      <div className='w-full max-w-6xl mt-8'>
        {children}
      </div>
    </div>
  )
}
