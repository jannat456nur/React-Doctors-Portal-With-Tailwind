import React from 'react';
import doctor from '../../../images/doctor.png'
import appointment from '../../../images/appointment.png'

const MakeAppointment = () => {
    return (
        <section 
        className='mt-16'
        style={{
            background :`url(${appointment})`
        }}>
            <div class="hero ">
  <div class="hero-content flex-col lg:flex-row mx-10">
    <img src={doctor} class=" -mt-28 hidden lg:block max-w-sm rounded-lg lg:w-1/2 mx-5  shadow-2xl " alt='' />
    <div>
        <h2 className='text-accent  lg font-bold'>Appointment</h2>
      <h1 class="text-4xl text-white font-bold">Make Appointment Today!</h1>
      <p class="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-accent">Learn More</button>
    </div>
  </div>
</div>
        </section>
    );
};

export default MakeAppointment;