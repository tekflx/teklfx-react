import React from 'react';
import ReactDOM from 'react-dom';

const features = [
  {
    name: 'NFT',
    description:
      'Create NFT art work and metadata. Decentralized, onchain, or URI storage. ERC-721/1155 tokens, customized to your needs.',
  },
  {
    name: 'Contract',
    description:
      'Create, audit, configure, compile and deploy Smart Contracts. Support for Ethereum, Polygon and Solana.',
  },
  {
    name: 'Tokens',
    description:
      'Launch an ERC-20 based Token. Configure liquidity and supply. Registration on decentralized exchanges and swap sites.',
  },
  {
    name: 'Minting',
    description:
      'Custom minting options, any price or format: free or paid, auction / dutch auction. Multi-stage setups: whitelist, presale, public.',
  },
  {
    name: 'Project Web Site',
    description:
    'No NFT project is complete without a beautiful web site. Templates available for whitepaper, roadmap, and team details.',
  },
  {
    name: 'Community Setup',
    description:
      'Social media automation, Discord server configuration, Opensea / Rarible / Looksrare integration and verificaiton services.',
  },
    ]

function CryptoServices() {
    return (
        <div>
          <div className='relative bg-white py-14 sm:py-8 lg:py-24'>
            <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
              <h2 className='text-base font-semibold tracking-wider text-cyan-600 uppercase'>
              SERVICES
              </h2>
              <p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
              Everything you need to succeed
              </p>
              <p className='mt-5 max-w-prose mx-auto text-xl text-gray-900'>
              Some of our Web3 / Crypto specific services.
              </p>
              <div className='mt-12'>
                <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                  {features.map((feature) => (
                    <div key={feature.name} className='pt-6'>
                      <div className='flow-root bg-gray-50 rounded-lg px-6 pb-8'>
                        <div className='-mt-6'>
                          <h3 className='mt-8 text-lg font-medium text-gray-900 tracking-tight'>
                            {feature.name}
                          </h3>
                          <p className='mt-5 text-base text-gray-500'>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>
    );
}

export default CryptoServices;

const cservicesElements = document.querySelectorAll('.crypto-services')

if (cservicesElements.length > 0) {
  cservicesElements.forEach(element => {
    ReactDOM.render(<CryptoServices />, element);
  })
}