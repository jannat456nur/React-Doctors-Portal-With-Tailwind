import React from 'react';
import treatment from '../../../images/treatment.png'

const MidBanner = () => {
    return (
      <div class="hero px-5 ">
  <div class="hero-content flex-col lg:flex-row">
    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl  lg:w-1/3" alt='' />
    <div className='px-10 '>
      <h1 class="text-3xl font-bold ">Expectional Dental</h1>
      <h1 class="text-3xl font-bold "> Care,on Your Terms</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-accent text-white">Learn More</button>
    </div>
  </div>
</div>
    );
};

export default MidBanner;