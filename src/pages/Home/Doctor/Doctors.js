import React from 'react';
import doctor from '../../../images/doctor.png'
import Doctor from './Doctor';

const Doctors = () => {
      const doctorData =[
        {
            id:1,
            name:'Dr. John',
            phone:'+999 999 999',
            img :doctor,
        },
        {
            id:2,
            name:'Dr. John',
            phone:'+999 999 999',
            img :doctor,
         
        },
           {
             id:3,
            name:'Dr. John',
            phone:'+999 999 999',
            img :doctor,
        },
        
    ]
    return (
        <section>
            <div>
                <h4 className='text-accent pt-20 text-center'>Our Doctors</h4>
            </div>
         <div className='grid mt-20 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  grow h-14'>
             
             {
                 doctorData.map(doctor=><Doctor
                 key={doctor.id}
                 doctor={doctor}
                 >
                 </Doctor>)
             }
         </div>
         </section>
    );
};

export default Doctors;