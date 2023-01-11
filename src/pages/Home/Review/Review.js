import React from 'react';

const Review = ({review}) => {
    const{name,description,img,address} = review ;
    return (

          <section>
          
        <div class="card shadow-xl">
      

  <figure class="px-10 pt-10">
 
        <p>{description}</p>
  </figure>
  <div class="card-body items-center text-center grid ">
  <div class="card-actions">
       <img src={img} alt="Shoes" class="rounded-xl w-1/4 rounded-full ring ring-accent" />
     
  </div>
    <p className='-mt-32 font-bold'>{name}</p>
    <p className='-mt-20 font-bold'> {address}</p>
    
  </div>
</div>
</section>

    );
};

export default Review;