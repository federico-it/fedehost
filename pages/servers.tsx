/* eslint-disable @next/next/no-img-element */

import Container from 'components/Container'

/* eslint-disable */
const products = [
  {
    id: 1,
    name: 'XS OpenVz Vps',
    href: 'https://my.fedehost.xyz/index.php?rp=/store/vps/openvz-vps-xs-05-gb-ram',
    imageSrc: 'https://fedehost.xyz/static/mac2.svg',
    imageAlt: 'Image of Server.',
    price: '€2.99',
    color: '1 Core - 0.5GB Ram - /64 Subnet IPV6',
  },
  {
    id: 2,
    name: 'S OpenVz Vps',
    href: 'http://my.fedehost.xyz/index.php?rp=/store/vps/openvz-vps-s-1-gb-ram',
    imageSrc: 'https://fedehost.xyz/static/mac0.svg',
    imageAlt: 'Image of Server.',
    price: '€4.99',
    color: '1 Core - 1GB Ram - /64 Subnet IPV6',
  },
  {
    id: 3,
    name: 'M OpenVz Vps',
    href: 'http://my.fedehost.xyz/index.php?rp=/store/vps/openvz-vps-s-15-gb-ram',
    imageSrc: 'https://fedehost.xyz/static/mac3.svg',
    imageAlt: 'Image of Server.',
    price: '€6.99',
    color: '2 Core - 1.5GB Ram - /64 Subnet IPV6',
  },
  {
    id: 4,
    name: 'L OpenVz Vps',
    href: 'http://my.fedehost.xyz/index.php?rp=/store/vps/openvz-vps-l-20-gb-ram',
    imageSrc: 'https://fedehost.xyz/static/mac1.svg',
    imageAlt: 'Image of Server.',
    price: '€8.99',
    color: '3 Core - 2 GB Ram - /64 Subnet IPV6',
  },
  // More products...
]
export default function Tutorial() {
  return (
    <Container>
      <div className='mx-auto max-w-2xl pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='text-4xl font-bold items-center text-center tracking-tight '>
          VPS Servers
        </h2>

        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {products.map(product => (
            <div key={product.id} className='group relative'>
              <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                />
              </div>
              <div className='mt-4 flex justify-between'>
                <div>
                  <h3 className='text-sm '>
                    <a href={product.href}>
                      <span aria-hidden='true' className='absolute inset-0' />
                      {product.name}
                    </a>
                  </h3>
                  <p className='mt-1 text-sm text-gray-500'>{product.color}</p>
                </div>
                <p className='text-sm font-medium '>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
