import React from 'react';
import chair from '../../../images/chair.png'
import './Banner.css'

const Banner = () => {
    return (
    <div class="hero px-5 bg-image" >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img alt='' src={chair} class=" rounded-lg shadow-2xl lg:w-1/2" />
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button class="btn btn-accent bg-gradient-to-r from-accent to-info text-white">Get Started</button>
        </div>
      </div>
    </div>
    );
};

export default Banner;