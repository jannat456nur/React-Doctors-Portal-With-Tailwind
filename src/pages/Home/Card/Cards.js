import React from 'react';
import clock from '../../../icons/clock.svg'
import phone from '../../../icons/phone.svg'
import marker from '../../../icons/marker.svg'
import Card from './Card';


const Cards = () => {
    const cardData =[
        {
            id:1,
            name:'Opening Hours',
            description:"Open 9.00 am to 5.00 pm",
            icon :clock,
            bgClass :'bg-accent',
        },
        {
            id:2,
            name:'Our Location',
            description:"Open 9.00 am to 5.00 pm",
            icon :marker,
            bgClass :'bg-info',
        },
        {
            id:3,
            name:'Contact us',
            description:"Open 9.00 am to 5.00 pm",
            icon :phone,
            bgClass :'bg-accent',
        },
    ]
    return (
        <div className='grid mt-20 text-white gap-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10'>
          {
            cardData.map(card =><Card
            key={card.id}
            card={card}
            ></Card>)
          }  
        </div>
    );
};

export default Cards;