import React, { useState } from 'react'
import chair from '../../../images/chair.png'
import { DayPicker } from 'react-day-picker';
import bg from '../../../images/bg.png'


const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
   
  return (
    <header className='my-6'
    style={{
            background :`url(${bg})`
        }}>
    
        
       <div class="hero">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img alt='dentist chair' src={chair} class="max-w-sm lg:w-1/2 rounded-lg shadow-2xl" />
    <div className='mr-6'>
    <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
     
    />
  
    </div>
  </div>
</div>
        
    </header>
  )
}

export default AppointmentBanner