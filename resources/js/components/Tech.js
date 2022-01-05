import React from 'react';
import ReactDOM from 'react-dom';


const resource = 
    { heading: 'TECHNOLOGY', title: 'We can support your stack', body: 'Here are some of the technologies that our clients most commonly use.' };

const files = [
    {
        title: 'Laravel/PHP',
        source:
        '/img/tech/laravel-icon.svg',
    },
    {
        title: 'Spring/Java',
        source:
        '/img/tech/spring-logo.svg',
    },
    {
        title: '.Net',
        source:
        '/img/tech/dot-net-core-7.svg',
    },
    {
        title: 'ReactJS',
        source:
        '/img/tech/react.svg',
    },

    {
        title: 'MySql',
        source:
        '/img/tech/mysql-logo.svg',
    },
    {
        title: 'Postresql',
        source:
        '/img/tech/postgresql.svg',
    },
    {
        title: 'MongoDB',
        source:
        '/img/tech/MongoDB_Logo.svg',
    },
    {
        title: 'ElasticSearch',
        source:
        '/img/tech/elastic-logo.svg',
    },

    {
        title: 'Cassandra',
        source:
        '/img/tech/cassandra-logo.svg',
    },
    {
        title: 'Kafka',
        source:
        '/img/tech/Apache_kafka-icon.svg',
    },
    {
        title: 'BigQuery',
        source:
        '/img/tech/google_bigquery-icon.svg',
    },
    {
        title: 'DataBricks',
        source:
        '/img/tech/db-nav-logo.svg',
    },
    {
        title: 'Docker',
        source:
        '/img/tech/docker.svg',
    },
    {
        title: 'Kubernetes',
        source:
        '/img/tech/Kubernetes_logo.svg',
    },
    {
        title: 'AWS',
        source:
        '/img/tech/aws-logo.svg',
    },
    {
        title: 'Google Cloud',
        source:
        '/img/tech/gcp-logo.svg',
    },
    
    
    ]
    
function Tech() {
    return (
        <div className='relative bg-gray-200 py-12 sm:py-18 lg:py-24'>
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
              <div class="p-6" >
                <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    {files.map((file) => (
                        <li key={file.source} className="relative">
                            <div className="group block aspect-w-10 aspect-h-7 rounded-lg  focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                                <img src={file.source} alt="" className="w-32 h-32 flex-shrink-0 mx-auto" />
                            </div>
                            <p className="mt-2 block text-sm font-large font-bold text-black truncate pointer-events-none">{file.title}</p>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        </div>


  
      
    );
}

export default Tech;

const techElements = document.querySelectorAll('.tech')

if (techElements.length > 0) {
    techElements.forEach(element => {
    ReactDOM.render(<Tech />, element);
  })
}
