import React from 'react';
import ReactDOM from 'react-dom';


const resource = 
    { heading: 'RESOURCES', title: 'Never enough capacity?', body: 'Whether it be team augmentation, sourcing or complete oversight, our network of resources can find the skills you require.Work remotely or locally, we can attract a team to meet your needs. From recruitment to onboarding, you can count on us.' };
    
function Resources() {
    return (
        <div className='relative bg-white py-14 sm:py-8 lg:py-24'>
            <div className='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
              <div>
                <h2 className='text-base font-semibold tracking-wider text-cyan-600 uppercase'>
                  {resource.heading}
                </h2>
                <p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
                {resource.title}
                </p>
                <p className='mt-5 max-w-prose mx-auto text-xl text-gray-500'>
                {resource.body}
                </p>
              </div>
              <div className='flex justify-center mt-12 -mb-10 sm:-mb-24 lg:-mb-40'>
                <img
                  className='w-1/2 hover:w-full rounded-lg shadow-xl ring-1 ring-black ring-opacity-5'
                  src='/img/teams.svg'
                  alt='Recruitment'
                />
              </div>
            </div>
        </div>
    );
}

export default Resources;

const resourcesElements = document.querySelectorAll('.resources')

if (resourcesElements.length > 0) {
    resourcesElements.forEach(element => {
    ReactDOM.render(<Resources />, element);
  })
}
