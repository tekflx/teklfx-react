import React from 'react';
import ReactDOM from 'react-dom';
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline'

const features = [
  {
    name: 'Deployment Process',
    description:
      'CI/CD process, spin up dev/staging/prod resources on the fly, automate your entire SDLC (Software Development Life Cycle).',
    icon: CloudUploadIcon,
  },
  {
    name: 'E-Commerce / Fintech',
    description:
      'Accept various payment types, shopping cart, merchant setup, payment provider integration, PCI-DSS cert and audit, Crypto integration.',
    icon: LockClosedIcon,
  },
  {
    name: 'Data Pipelines',
    description:
      'Real-Time data collection and processing, data warehouse/data lakes, telemetry & analytics, business intelligence and reporting.',
    icon: RefreshIcon,
  },
  {
    name: 'Service Oriented Architecture',
    description:
      'Event Driven Architecture, decoupling of components, improved scalability, dependency inversion, no SPOF.',
    icon: CogIcon,
  },
  {
    name: 'Contract/Cost Negotiation',
    description:
      'Leverage experience, partners and contacts to reduce your spend. Balance CapEx & OpEx to reduce the stress on your budget.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Security',
    description:
      'SIEM and NOC setup, Web Application Firewall integration, code audit and static analysis, security training (OWASP Top 10).',
    icon: ShieldCheckIcon,
  },
    ]

function Services() {
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
              <p className='mt-5 max-w-prose mx-auto text-xl text-gray-500'>
              To ensure successful and on-time deliveries, we offer the following services and skills.
              </p>
              <div className='mt-12'>
                <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                  {features.map((feature) => (
                    <div key={feature.name} className='pt-6'>
                      <div className='flow-root bg-gray-50 rounded-lg px-6 pb-8'>
                        <div className='-mt-6'>
                          <div>
                            <span className='inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg'>
                              <feature.icon
                                className='h-6 w-6 text-white'
                                aria-hidden='true'
                              />
                            </span>
                          </div>
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

export default Services;

const servicesElements = document.querySelectorAll('.services')

if (servicesElements.length > 0) {
  servicesElements.forEach(element => {
    ReactDOM.render(<Services />, element);
  })
}