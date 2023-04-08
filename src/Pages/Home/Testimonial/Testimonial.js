import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const reviewData = [
        {
            _id: 1,
            name: 'Winson Herry',
            location: 'California',
            photo: people1,
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            location: 'California',
            photo: people2,
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            location: 'California',
            photo: people3,
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
    ]
    return (
        <section className='my-16'>
        <div className='text-center'>
                    <h4 className='text-xl font-bold text-primary'>Testimonial</h4>
                    <h3 className='text-4xl  text-accent'>What Our Patients Says</h3>
                </div>
            <div className='flex justify-between'>
                
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviewData.map(reviews => <Review key={reviews._id} reviews={reviews}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;