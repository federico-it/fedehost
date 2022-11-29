/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Link from 'next/link'
import ReactGA from 'react-ga'

import Footer from 'components/Footer/Footer'
import cn from 'lib/classNames'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Container(props: any) {
  const [mounted, setMounted] = useState<boolean>(false)
  const { resolvedTheme, setTheme } = useTheme()
  const TRACKING_ID = 'UA-64177570-10' // YOUR_OWN_TRACKING_ID
  if (typeof window !== 'undefined') {
    ReactGA.initialize(TRACKING_ID)
    ReactGA.pageview(window.location.pathname + window.location.search)
  }
  const { children, ...customMeta } = props
  const router = useRouter()

  const meta = {
    title: 'FedeHost',
    description: 'Cheap IPV6 Vps Hosting - Unmetered - OpenVz',
    image:
      'https://cdn.discordapp.com/attachments/797485737272541250/893912493255176192/UnicornVectorGradient_7.png',
    type: 'website',
    ...customMeta,
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <div
        className={cn(
          'text-primary',
          'relative h-full min-h-screen w-full',
          'flex flex-col',
          'motion-reduce:transition-none motion-reduce:transform-none'
        )}
      >
        <Head>
          <meta name='robots' content='follow, index' />
          <meta
            property='og:url'
            content={`https://plexpy.com/${router.asPath}`}
          />
          <link rel='canonical' href={`https://plexpy.com/${router.asPath}`} />
          <title>FedeHost</title>

          <meta property='og:type' content={meta.type} />
          <meta
            id='meta-description'
            name='description'
            content='Cheap IPV6 Vps Hosting - Unmetered - OpenVz.'
          />
          <meta property='og:site_name' content='PlexPy' />
          <meta property='og:description' content={meta.description} />
          <meta property='og:title' content={meta.title} />
          <meta property='og:image' content={meta.image} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@fedehost' />
          <meta name='twitter:title' content={meta.title} />
          <meta name='twitter:description' content={meta.description} />
          <meta name='twitter:image' content={meta.image} />
          {meta.date && (
            <meta property='article:published_time' content={meta.date} />
          )}
        </Head>

        <nav className='sticky w-full bg-gray-100/40 z-[1] filter-blur dark:bg-gray-1000/40 top-2 md:top-4 max-w-6xl px-4 py-2 rounded-md mx-auto flex justify-between items-center'>
          <div className='flex flex-row md:gap-6 gap-3 text-tertiary'>
            <div className=' w-32 '>
              <a href='/'>
                <svg
                  className='dark:fill-white'
                  data-v-423bf9ae=''
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 421 90'
                >
                  <g
                    className='dark:fill-white'
                    data-v-423bf9ae=''
                    id='739d6059-b7d8-4be1-8377-2792efef4e8a'
                    fill='black'
                    transform='matrix(6.122449456230433,0,0,6.122449456230433,109.99999991341016,3.1836738096877255)'
                  >
                    <path d='M0 6.41L0 1.98L4.89 1.98L4.89 3.60L1.94 3.60L1.94 5.91L4.48 5.91L4.52 5.93L4.50 5.97L4.50 5.97Q4.48 6.46 4.48 6.54L4.48 6.54L4.20 6.54L4.20 6.56L4.20 6.56Q4.20 6.73 4.17 7.31L4.17 7.31L4.44 7.31L4.44 7.31Q4.44 7.59 4.39 7.59L4.39 7.59L2.60 7.59L2.60 7.92L1.66 7.92L1.66 8.10L1.94 8.10L1.94 8.96L2.87 8.96L2.87 9.11L1.94 9.11L1.94 11.47L1.92 11.58L0.92 11.58L0.92 11.73L0.03 11.73L0.03 11.73Q0 11.73 0 11.70L0 11.70L0 11.45L0.01 11.29L0.49 11.29L0.49 11.04L0 11.04L0 10.10L0.23 10.10L0.23 6.66L0.62 6.66L0.62 6.41L0 6.41ZM1.92 8.96L1.03 8.96L1.03 9.11L1.92 9.11L1.92 8.96ZM5.56 6.80L5.56 2.00L10.35 2.00L10.35 3.60L10.35 3.60Q10.35 3.63 10.32 3.63L10.32 3.63L7.47 3.63L7.47 5.74L10.02 5.74L10.02 5.76L10.02 5.76Q10.02 5.84 9.99 6.79L9.99 6.79L9.99 6.79Q9.97 6.79 9.97 6.80L9.97 6.80L10.09 6.80L10.09 7.29L7.88 7.29L7.88 9.29L7.29 9.29L7.29 9.49L7.88 9.49L7.88 10.10L10.38 10.10L10.38 10.32L10.19 10.32L10.19 11.52L7.19 11.52L7.19 11.73L5.77 11.73L5.77 8.24L5.56 8.24L5.56 7.01L4.00 7.01L4.00 6.80L5.56 6.80ZM6.37 6.80L5.57 6.80L5.57 7.01L6.37 7.01L6.37 6.80ZM11.60 6.62L11.60 1.96L14.58 1.96L14.58 1.96Q16.44 1.96 17.14 3.22L17.14 3.22L17.14 3.22Q17.74 4.20 17.74 6.49L17.74 6.49L18.03 6.49L18.03 8.83L15.13 8.83L15.13 8.56L16.04 8.56L16.04 6.49L15.78 6.49L15.78 5.63L15.78 5.63Q15.78 4.19 15.13 3.79L15.13 3.79L15.13 3.79Q14.76 3.58 13.92 3.58L13.92 3.58L13.52 3.58L13.52 6.44L13.79 6.44L13.79 8.83L11.84 8.83L11.84 6.62L11.60 6.62ZM10.73 9.13L10.73 8.83L11.61 8.83L11.61 9.13L13.79 9.13L13.79 9.78L15.13 9.78L15.13 9.13L18.03 9.13L18.03 9.78L16.04 9.78L16.04 11.52L13.79 11.52L13.79 11.73L11.63 11.73L11.63 11.73Q11.60 11.73 11.60 11.70L11.60 11.70L11.60 9.13L10.73 9.13ZM13.79 9.13L13.79 8.83L15.13 8.83L15.13 9.13L13.79 9.13ZM18.03 9.13L18.03 8.83L19.95 8.83L19.95 9.13L18.03 9.13ZM18.88 6.80L18.88 2.00L23.67 2.00L23.67 3.60L23.67 3.60Q23.67 3.63 23.64 3.63L23.64 3.63L20.79 3.63L20.79 5.74L23.34 5.74L23.34 5.76L23.34 5.76Q23.34 5.84 23.32 6.79L23.32 6.79L23.32 6.79Q23.30 6.79 23.30 6.80L23.30 6.80L23.41 6.80L23.41 7.29L21.21 7.29L21.21 9.29L20.61 9.29L20.61 9.49L21.21 9.49L21.21 10.10L23.71 10.10L23.71 10.32L23.51 10.32L23.51 11.52L20.51 11.52L20.51 11.73L19.09 11.73L19.09 8.24L18.88 8.24L18.88 7.01L17.32 7.01L17.32 6.80L18.88 6.80ZM19.69 6.80L18.89 6.80L18.89 7.01L19.69 7.01L19.69 6.80ZM24.60 6.64L24.60 1.96L26.54 1.96L26.54 5.85L28.50 5.85L28.50 1.96L30.14 1.96L30.14 7.51L29.46 7.51L29.46 7.75L30.14 7.75L30.14 11.73L28.53 11.73L28.53 11.73Q28.50 11.73 28.50 11.70L28.50 11.70L28.50 7.48L26.54 7.48L26.54 11.70L26.54 11.70Q26.54 11.73 26.51 11.73L26.51 11.73L24.88 11.73L24.88 6.64L24.60 6.64ZM30.14 7.75L30.14 7.51L31.01 7.51L31.01 7.75L30.14 7.75ZM34.75 1.95L34.75 1.95L34.75 1.95Q36.85 1.95 37.52 3.42L37.52 3.42L37.52 3.42Q37.89 4.14 37.89 6.19L37.89 6.19L37.89 6.23L37.17 6.23L37.17 6.56L37.89 6.56L37.89 10.10L37.41 10.10L37.41 11.37L36.46 11.37L36.46 11.73L33.14 11.73L33.14 11.37L32.74 11.37L32.74 10.10L31.88 10.10L31.88 9.10L32.39 9.10L32.39 8.57L31.88 8.57L31.88 9.10L30.67 9.10L30.67 8.57L31.59 8.57L31.59 8.57Q31.58 7.38 31.58 6.74L31.58 6.74L31.58 5.91L31.58 5.91Q31.58 3.58 32.36 2.80L32.36 2.80L32.36 2.80Q33.08 1.95 34.75 1.95ZM33.55 5.32L33.55 5.32L33.57 5.32L33.55 5.35L33.55 6.23L32.82 6.23L32.82 6.56L33.55 6.56L33.55 6.56Q33.54 8.67 33.54 9.75L33.54 9.75L33.54 10.10L35.17 10.10L35.17 9.56L35.92 9.56L35.92 9.54L35.92 9.54Q35.92 8.54 35.91 6.75L35.91 6.75L35.91 6.75Q35.91 6.68 35.92 6.38L35.92 6.38L35.92 6.38Q35.92 4.45 35.70 4.01L35.70 4.01L35.70 4.01Q35.46 3.58 34.84 3.58L34.84 3.58L34.60 3.58L34.60 3.58Q33.86 3.58 33.68 4.24L33.68 4.24L33.68 4.24Q33.60 4.56 33.55 5.32ZM37.89 6.56L37.89 6.23L39.07 6.23L39.07 6.56L37.89 6.56ZM41.95 1.96L41.95 1.96L41.95 1.96Q43.58 1.96 44.13 3.01L44.13 3.01L44.13 3.01Q44.52 3.80 44.52 4.56L44.52 4.56L44.50 4.56L44.50 4.56Q43.39 4.66 42.98 4.66L42.98 4.66L42.98 4.66Q42.98 4.12 42.64 3.75L42.64 3.75L42.64 3.75Q42.33 3.57 42.06 3.57L42.06 3.57L41.79 3.57L41.79 3.57Q41.09 3.57 40.94 4.11L40.94 4.11L40.94 4.11Q40.91 4.27 40.91 4.35L40.91 4.35L40.91 4.50L40.91 4.50Q40.91 5.26 41.71 5.61L41.71 5.61L41.71 5.61Q41.78 5.67 42.83 6.12L42.83 6.12L42.83 6.12Q43.39 6.38 43.87 6.76L43.87 6.76L43.87 6.77L42.16 6.77L42.16 6.97L44.42 6.97L44.42 7.24L44.71 7.24L44.71 10.21L44.15 10.21L44.15 11.73L39.80 11.73L39.80 10.21L38.77 10.21L38.77 9.18L39.35 9.18L39.35 8.83L38.77 8.83L38.77 8.59L40.76 8.59L40.76 10.21L42.80 10.21L42.80 7.77L41.28 7.77L41.28 6.97L39.38 6.97L39.38 6.77L40.30 6.77L40.30 6.76L40.30 6.76Q39.09 5.96 39.09 4.50L39.09 4.50L39.09 4.37L39.09 4.37Q39.09 3.14 39.85 2.51L39.85 2.51L39.85 2.51Q40.53 1.96 41.95 1.96ZM44.42 6.97L44.42 6.77L45.11 6.77L45.11 6.97L44.42 6.97ZM38.12 9.18L38.12 8.83L38.77 8.83L38.77 9.18L38.12 9.18ZM44.93 3.57L44.93 1.93L50.67 1.93L50.67 3.57L48.77 3.57L48.77 10.34L49.63 10.34L49.63 10.54L48.77 10.54L48.77 11.29L48.25 11.29L48.25 11.55L48.62 11.55L48.62 11.73L46.87 11.73L46.87 11.73Q46.84 11.73 46.84 11.70L46.84 11.70L46.84 3.57L44.93 3.57ZM48.75 10.34L48.09 10.34L48.09 10.54L48.75 10.54L48.75 10.34Z'></path>
                  </g>
                  <g
                    className='dark:fill-white'
                    data-v-423bf9ae=''
                    id='c855f5c8-3ad5-4900-946d-c77216487364'
                    transform='matrix(2.8125,0,0,2.8125,0,0)'
                    stroke='none'
                    fill='black'
                  >
                    <path d='M15.965 16.258l.707-.707 10.39 10.39-.707.707z'></path>
                    <path d='M4.935 26.357L26.018 5.274l.707.707L5.642 27.065z'></path>
                    <path d='M31 1v4.194h-4.194V1H31m1-1h-6.194v6.194H32V0zM31 26.806V31h-4.194v-4.194H31m1-1h-6.194V32H32v-6.194zM5.194 26.806V31H1v-4.194h4.194m1-1H0V32h6.194v-6.194z'></path>
                  </g>
                </svg>
              </a>
            </div>

            <Link href='/servers'>
              <a className='transition-all  uppercase font-extrabold  cursor-pointer hover:text-primary'>
                Vps
              </a>
            </Link>
            <Link href='https://status.fedehost.xyz'>
              <a className='transition-all uppercase font-extrabold cursor-pointer hover:text-primary'>
                status
              </a>
            </Link>
          </div>
          <div className='flex flex-row items-center space-x-3'>
            <div className='sr-only sm:not-sr-only'>
              <Link href='https://my.fedehost.xyz/index.php?rp=/login'>
                <a className='px-5 py-1 mx-auto text-lg font-bold text-gray-100 bg-gray-900 rounded-md dark:text-gray-900 dark:bg-gray-100'>
                  Client Area
                </a>
              </Link>
            </div>
            <div className='md:hidden'>
              <Link href='https://my.fedehost.xyz/index.php?rp=/login'>
                <a className='px-2 py-1 mx-auto text-lg font-bold text-gray-100 bg-gray-900 rounded-md dark:text-gray-900 dark:bg-gray-100'>
                  MY
                </a>
              </Link>
            </div>
            <button
              aria-label='Toggle Dark Mode'
              type='button'
              className='flex items-center justify-center transition-all bg-gray-200 rounded-lg w-9 h-9 dark:bg-gray-600 hover:ring-2 ring-gray-300'
              onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }
            >
              {mounted && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  className='w-5 h-5 text-gray-800 dark:text-gray-200'
                >
                  {resolvedTheme === 'dark' ? (
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                    />
                  ) : (
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                    />
                  )}
                </svg>
              )}
            </button>
          </div>
        </nav>

        <main
          className={cn(
            'px-4 mt-12',
            'max-w-5xl',
            'mx-auto my-auto',
            'flex flex-col justify-center gap-12',
            'divide-y divide-gray-200 dark:divide-gray-900',
            'rounded-lg'
          )}
        >
          <div>{children}</div>
          <footer>
            <Footer />
          </footer>
        </main>
      </div>
    </>
  )
}
