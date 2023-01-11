import React from 'react';
import per1 from '../../../images/people-1.png'
import per2 from '../../../images/people-2.png'
import per3 from '../../../images/people-3.png'
import Review from './Review';
import quote from '../../../icons/quote.svg'

const Reviews = () => {
    const reviewData =[
        {
            id:1,
            name:'Wiston Henry',
            description:"Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.",
            img :per1,
            address:'California',
            bgClass :'bg-accent',
        },
        {
            id:2,
            name:'Wiston Henry',
            description:"Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.",
            img :per2,
            address:'California',
            bgClass :'bg-info',
        },
        {
            id:3,
            name:'Wiston Henry',
            description:"Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.",
            img :per3,
            address:'California',
            bgClass :'bg-accent',
        },
    ]
    return (
        <section className='pt-10'>
       <div  className='flex justify-between'>
       <div>
        <h4 className='text-accent font-bold'>Testimonial</h4>
                  <h1 className=''>Wht's Our Patients Says</h1>
                  </div>
                  <img alt='' className='w-24 lg:w-48' src={quote}></img>
       </div>
        <div className='grid mt-20  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            
            {
                reviewData.map(review=><Review
                key={review.id}
                review={review}
                >
                </Review>)
            }
        </div>
        </section>
    );
};

export default Reviews;