import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './Footer'; 
import Support from './Support';
import Nav from './Nav';
import Creator from './Creator';
import CryptoServices from './CryptoServices';

function Web3() {
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
                                        <span className='block'>Web 3.0 is here</span>
                                        <span className='pb-3 block text-4xl bg-clip-text text-transparent bg-teal-500 sm:text-5xl '>
                                            NFTs are just the start
                                        </span>
                                        </h1>
                                        <p className='text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl'>
                                        Web 3 at your fingertips, Dapps, NFTs, Tokens, Crypto Payments, Digital Assets, Metaverse, Digital Assets &amp; Experiences, OnChain Games, ... We can make it happen.
                                        </p>
                                    </div>
                                </div>
                                <div className='mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative'>
                                    <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
                                        <img
                                        className='w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                                        src='/img/web3/nft.svg'
                                        alt='NFT online'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Creator />          
                    <CryptoServices />
                    <Support />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Web3;

const web3Elements = document.querySelectorAll('.web3')

if (web3Elements.length > 0) {
    web3Elements.forEach(element => {
        ReactDOM.render(<Web3 />, element);
    })
}