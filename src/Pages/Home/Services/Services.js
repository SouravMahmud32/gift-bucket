import React from 'react';
import Fluoride from '../../../assets/images/iconbox-3.png'
import Cavity from '../../../assets/images/iconbox-2.png'
import Whitening from '../../../assets/images/iconbox-1.png'
import Service from './Service';

const Services = () => {
    const servicesData = [
     {
          id: 1,
          name: 'Surprising Gift',
          description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
          icon: Fluoride
      },
      {
          id: 2,
          name: 'Occasions Gift',
          description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
          icon: Cavity
      },
      {
          id: 1,
          name: 'Valentine Gift',
          description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
          icon: Whitening
      }
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='font-bold text-primary text-xl'>OUR SERVICES</h3>
                <h2 className='text-accent text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    servicesData.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;