import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './Footer'; 
import Support from './Support';
import Nav from './Nav';
import Creator from './Creator';
import CryptoServices from './CryptoServices';

function Company() {
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
                                        <span className='block'>Small or Large</span>
                                        <span className='pb-3 block text-4xl bg-clip-text text-transparent bg-teal-500 sm:text-5xl '>
                                            We are ready to help
                                        </span>
                                        </h1>
                                        <p className='text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl'>
                                        Explore our service offerings and feel free to reach out for any questions. Our team is here to help.
                                        </p>
                                    </div>
                                </div>
                                <div className='mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative'>
                                    <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
                                        <img
                                        className='w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                                        src='/img/project.svg'
                                        alt='Project Team'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative bg-gray-200 py-14 sm:py-8 lg:py-12'>
                        <div className='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
                            <div>
                                <h2 className='text-base font-semibold tracking-wider text-cyan-600 uppercase'>
                                Team
                                </h2>
                                <p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
                                Experienced Professionals
                                </p>
                                <p className='mt-5 max-w-prose mx-auto text-xl text-gray-900'>
                                Ready to contribute to your projects and make a difference.
                                </p>
                            </div>
                            <div className='pt-8  sm:pt-8 lg:pt-8 lg:overflow-hidden'>
                                <div className='mx-auto max-w-7xl'>
                                    <h2 className='mt-4 text-xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-xl  xl:text-xl'>
                                        <span className='block'>Contact Us</span>
                                    </h2>
                                    <p className='mt-2 text-align-center'><a href="mailto:services@tekflx.com">Email</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative bg-white py-14 sm:py-8 lg:py-24'>
                        <div className='mx-auto max-w-7xl lg:px-8'>
                            <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
                                <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
                                    <div className='lg:py-12'>
                                        <h2 className='mt-4 text-xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-2xl lg:mt-6 xl:text-2xl'>
                                        <span className='block'>Montreal, Canada</span>
                                        </h2>
                                        <p className='text-base text-gray-900 sm:text-xl lg:text-lg xl:text-xl'>
                                        We are a Remote first company, but we have roots in North America.
                                        </p>
                                        <h3 className='mt-2 text-lg tracking-tight font-bold text-black sm:text-lg xl:text-lg'>
                                            Office Address:
                                        </h3>
                                        <p>1250 René-Lévesque Blvd West</p>
                                        <p>Montreal, Québec</p>
                                        <p>H3B 4W8</p>
                                    </div>
                                </div>
                                <div className='mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative'>
                                    <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
                                    <iframe
                                        width="400"
                                        height="300"
                                        loading="lazy"
                                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBRWA_mM2H56GQFbJs9dGEKwvIt97-IN3A&q=1250+René-Lévesque+Blvd+W,+Montreal,+QC+H3B+4W8">
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Company;

const companyElements = document.querySelectorAll('.company')

if (companyElements.length > 0) {
    companyElements.forEach(element => {
        ReactDOM.render(<Company />, element);
    })
}