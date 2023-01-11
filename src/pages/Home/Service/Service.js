import React from 'react';

const Service = ({service}) => {
    const { name,description,img} = service;
    return (
        <div class="card w-96  ">
        <figure class=" pt-5">
          <img src={img} alt="Shoes" className='w-1/3'/>
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
};

export default Service;