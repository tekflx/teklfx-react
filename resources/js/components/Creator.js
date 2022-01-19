import React from 'react';
import ReactDOM from 'react-dom';


const resource = 
    { heading: 'creators', title: 'You are early. Take Advantage', body: 'Blur the lines between the digital and physical world.' };

const files = [
    {
        title: 'Laravel/PHP',
        source:
        '/img/tech/laravel-icon.svg',
    },
    
    ]
    
function Creator() {
    return (
        <div className='relative bg-gray-200 py-14 sm:py-8 lg:py-24'>
            <div className='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
                <div>
                    <h2 className='text-base font-semibold tracking-wider text-cyan-600 uppercase'>
                    {resource.heading}
                    </h2>
                    <p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
                    {resource.title}
                    </p>
                    <p className='mt-5 max-w-prose mx-auto text-xl text-gray-900'>
                    {resource.body}
                    </p>
                </div>
                <div className='pt-10  sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden'>
                    <div className='mx-auto max-w-7xl lg:px-8'>
                        <div className='lg:grid lg:grid-cols-3 lg:gap-4'>
                            <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
                                <div className='lg:py-4'>
                                    <h2 className='mt-4 text-2xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-3xl l:text-3xl'>
                                    Sell Digital Goods
                                    </h2>
                                    <p className='py-2 text-base text-gray-900 sm:text-xl lg:text-lg xl:text-xl'>
                                    Sell your artwork, pair a digital good with your physical products. When are you joining the NFT space?
                                    </p>
                                </div>
                            </div>
                            <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
                                <div className='lg:py-4'>
                                    <h2 className='mt-4 text-2xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-3xl l:text-3xl'>
                                    Branding
                                    </h2>
                                    <p className='py-2 text-base text-gray-900 sm:text-xl lg:text-lg xl:text-xl'>
                                    Increase brand awareness and customer retention, offer immersive experiences, onboard to the metaverse.
                                    </p>
                                </div>
                            </div>
                            <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
                                <div className='lg:py-4'>
                                    <h2 className='mt-4 text-2xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-3xl l:text-3xl'>
                                    Take Back Control
                                    </h2>
                                    <p className='py-2 text-base text-gray-900 sm:text-xl lg:text-lg xl:text-xl'>
                                    Remove the need for intermediaries or centralized platforms to distribute products, services or even content.
                                    </p>
                                </div>
                            </div>
                            <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
                                <div className='lg:py-4'>
                                    <h2 className='mt-4 text-2xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-3xl l:text-3xl'>
                                    Web 3 Business
                                    </h2>
                                    <p className='py-2 text-base text-gray-900 sm:text-xl lg:text-lg xl:text-xl'>
                                    Build a new business or expand. Sell your work, capture royalties on secondary markets. 
                                    </p>
                                </div>
                            </div>
                            <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
                                <div className='lg:py-4'>
                                    <h2 className='mt-4 text-2xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-3xl l:text-3xl'>
                                    Payments
                                    </h2>
                                    <p className='py-2 text-base text-gray-900 sm:text-xl lg:text-lg xl:text-xl'>
                                    Accept crypto payments, expand to untapped markets, create your own currency(tokens).
                                    </p>
                                </div>
                            </div>
                            <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
                                <div className='lg:py-4'>
                                    <h2 className='mt-4 text-2xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-3xl l:text-3xl'>
                                    Community
                                    </h2>
                                    <p className='py-2 text-base text-gray-900 sm:text-xl lg:text-lg xl:text-xl'>
                                    Engage like never before, reward loyalty, create deeper relationships with exclusive access and perks.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


  
      
    );
}

export default Creator;

const creatorElements = document.querySelectorAll('.creator')

if (creatorElements.length > 0) {
    creatorElements.forEach(element => {
    ReactDOM.render(<Creator />, element);
  })
}
