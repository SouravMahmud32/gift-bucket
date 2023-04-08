import React from 'react';
import Banner from './Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import About from '../About/About';
import ContactForm from './ContactForm/ContactForm';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <About></About>
            <ContactForm></ContactForm>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;