import React from 'react';
import fluride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from './Service';

const Services = () => {
    const serviceData = [
        {
            id:1,
            name:'Fluride Treatment',
            description:"This allows us to focus on important things instead of making basic elements for every project",
            img :fluride,
            bgClass :'bg-accent',
        },
        {
            id:2,
            name:'Cavity Filling',
            description:"This allows us to focus on important things instead of making basic elements for every project",
            img :cavity,
            bgClass :'bg-accent',
        },
        {
            id:3,
            name:'Teeth Whitening',
            description:"This allows us to focus on important things instead of making basic elements for every project",
            img :whitening,
            bgClass :'bg-accent',
        },
    ]
    return (
        <div className='grid mt-20  gap-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-10 '>
            
            {
                serviceData.map(service =><Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;