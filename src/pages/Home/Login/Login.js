import React from 'react';
import appointment from '../../../images/appointment.png'

const Login = () => {
    return (
        <div className='grid justify-center	content-center	pt-10 '
         style={{
            background :`url(${appointment})`
        }}>
        
            

   <h2 className='text-accent grid lg font-bold justify-center	content-center'>Contact us</h2>
      <h1 class="text-4xl text-white font-bold ">Always Connect With us</h1>
      

<input type="email" placeholder="Email Address"  class=" input-bordered input-sm w-full  mt-5" />

<input type="text" placeholder="Subject" class=" input-bordered input-md w-full  mt-5" />

<input type="text" placeholder="Your Message"  class=" input-bordered input-lg w-full mt-5 mb-3" />
<div  className='text-accent grid lg font-bold justify-center content-center ' >
    
<button type='submit' class="btn btn-info text-white mb-4 ">Submit</button>
</div>
        </div>
    );
};

export default Login;