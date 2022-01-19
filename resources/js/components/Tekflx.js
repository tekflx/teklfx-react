import React from 'react';
import ReactDOM from 'react-dom';

import { ExternalLinkIcon } from '@heroicons/react/solid';
import Footer from './Footer'; 
import Blog from './Blog';
import Services from './Services';
import Support from './Support';
import Testimonial from './Testimonial';
import Resources from './Resources';
import Nav from './Nav';
import Tech from './Tech';
import DigitalTx from './DigitalTx';
import Web3Teaser from './Web3Teaser';

function Tekflx() {
    return (
        <div className='bg-white'>
      <div className='relative overflow-hidden'>
        <Nav />
        <main>
          <div className='pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden'>
            <div className='mx-auto max-w-7xl lg:px-8'>
              <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
                <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
                  <div className='lg:py-24'>
                    <h1 className='mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                      <span className='block'>A better way to</span>
                      <span className='pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-500 sm:pb-5'>
                        engineer projects
                      </span>
                    </h1>
                    <p className='text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl'>
                    From idea to production, leverage Teklfx's expertise to deliver any Engineering project. Our architects design appropriate solutions for projects of any size and can support nearly any tech stack
                    </p>
                    <div className="mt-10 sm:mt-12">
                    <div className="inline-flex rounded-md shadow">
                        <a href="/services" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-500 hover:bg-gray-400">
                          See our Services offerings
                          <ExternalLinkIcon className='-mr-1 ml-3 h-5 w-5 text-white'
                        aria-hidden='true' />
                        </a>
                    </div>
                  </div>
                  </div>
                </div>
                <div className='mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative'>
                  <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
                    {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                    <img
                      className='w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                      src='/img/cloud-illustration-teal-cyan.svg'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

                   
          <Services />
          <DigitalTx />
          <Web3Teaser />
          <Tech />
          <Testimonial />
          <Resources />
          <Support />
        </main>
        <Footer />
      </div>
    </div>
    );
}

export default Tekflx;

const tekflxElements = document.querySelectorAll('.tekflx')

if (tekflxElements.length > 0) {
  tekflxElements.forEach(element => {
    ReactDOM.render(<Tekflx />, element);
  })
}