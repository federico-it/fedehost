/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import BigText from 'components/BigText'
import Container from 'components/Container'
export default function Home() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center inset-0'>
        <BigText slides={['CHEAP', 'IPV6 ONLY', 'VPS']} />
        <img
          className=' w-72 '
          src='https://fedehost.xyz/static/software.svg'
          alt='Plex Screens and Raspberry Board'
        />
        <br></br>
        <br></br>
        <div className='text-center'>
          <p>
            Build your own VPS Server <br></br>
            economical, in a few simple steps.
          </p>
          <p className='font-bold'>Starts From 2.99 € / Month</p>
          <br></br>
          <br></br>
        </div>
        <Link href='/servers'>
          <a className='px-28 py-2 mx-auto text-lg font-bold text-gray-900 bg-gray-100 rounded-md dark:text-gray-100 dark:bg-gray-800'>
            See Products 🔥
          </a>
        </Link>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </Container>
  )
}
