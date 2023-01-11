import React from 'react';

const Doctor = ({doctor}) => {
    const {name,phone,img} = doctor;
    return (
       <div class="card  shadow-xl">
  <figure class="px-10 pt-10">
    <img src={img}alt="Shoes" className='bg:w-1/5' class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    <p>{phone}</p>
    {/* <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
    );
};

export default Doctor;