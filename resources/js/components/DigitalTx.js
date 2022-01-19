import React from 'react';
import ReactDOM from 'react-dom';


const digital = 
    { heading: 'DIGITAL TRANSFORMATION', title: 'Leverage the power of data', 
    body: "Every company's biggest competitve advantage lies in their data. Data is everywhere and successful companies extract value to make informed decisions. Let us help you transform your organziation.",
    };

  const highlights = [
    { name: 'Automate Workflows', initials: 'AW', href: '/services/digital-transform', members: 16, bgColor: 'bg-pink-600' },
    { name: 'Create Efficiencies', initials: 'CE', href: '/services/digital-transform', members: 12, bgColor: 'bg-purple-600' },
    { name: 'Optimize Performance', initials: 'OP', href: '/services/digital-transform', members: 16, bgColor: 'bg-yellow-500' },
    { name: 'Actionable Insights', initials: 'AI', href: '/services/digital-transform', members: 8, bgColor: 'bg-green-500' },
    { name: 'Revenue Growth', initials: 'RG', href: '/services/digital-transform', members: 8, bgColor: 'bg-blue-500' },
    { name: 'Cost Savings', initials: 'CS', href: '/services/digital-transform', members: 8, bgColor: 'bg-orange-500' },
    { name: 'Anomaly Detection', initials: 'AD', href: '/services/digital-transform', members: 8, bgColor: 'bg-red-500' },
    { name: 'Many More ...', initials: 'MM', href: '/services/digital-transform', members: 8, bgColor: 'bg-teal-500' },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
    
function DigitalTx() {
    return (
        <div className='relative bg-gray-50 py-14 sm:py-8 lg:py-24'>
            <div className='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
              <div>
                <h2 className='text-base font-semibold tracking-wider text-cyan-600 uppercase'>
                  {digital.heading}
                </h2>
                <p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
                {digital.title}
                </p>
                <p className='mt-5 w-3/4 md:w-full max-w-prose mx-auto text-xl text-gray-500'>
                {digital.body}
                </p>
                <div className='flex justify-center mt-6 '>
                  <img
                    className='w-1/2 hover:w-full rounded-lg shadow-xl ring-1 ring-black ring-opacity-5'
                    src='/img/data-transform.svg'
                    alt='digital transformation'
                  />
                </div>
                <div className='p-4'>
                  <h3 className="mt-6 text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl">Transformation Advantages</h3>
                  <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {highlights.map((project) => (
                      <li key={project.initials} className="col-span-1 flex shadow-sm rounded-md">
                        <div
                          className={classNames(
                            project.bgColor,
                            'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
                          )}
                        >
                          {project.initials}
                        </div>
                        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                          <div className="flex-1 px-4 py-2 text-sm truncate">
                            <a href={project.href} className="text-gray-900 font-medium hover:text-gray-600">
                              {project.name}
                            </a>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
        </div>
    );
}

export default DigitalTx;

const resourcesElements = document.querySelectorAll('.digital-tx')

if (resourcesElements.length > 0) {
    resourcesElements.forEach(element => {
    ReactDOM.render(<DigitalTx />, element);
  })
}
