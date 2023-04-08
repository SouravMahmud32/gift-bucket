import React from 'react';
import Treatment from '../../../assets/images/aboutbox.png'

const About = () => {
    return (
        <div className="hero mt-8 bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={Treatment} className="rounded-lg shadow-2xl lg:w-1/2" alt='' />
    <div className='ml-24'>
      <h1 className="text-5xl font-bold">Exceptional Gift, on Your Terms</h1>
      <p className="text-sm py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button className="btn bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default About;