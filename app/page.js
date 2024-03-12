import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div className='hero min-h-screen bg-case-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-6xl font-bold text-primary'>himChat Ai</h1>
          <p className='py-6 text-lg leading-loose'>
            himChat: Your AI language companion. Develop by Fauzan Shidqi 2024. it enhances your conversations, content creation, and more!
          </p>
          <Link href='/chat' className='btn btn-secondary'>
            Get  Started &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
