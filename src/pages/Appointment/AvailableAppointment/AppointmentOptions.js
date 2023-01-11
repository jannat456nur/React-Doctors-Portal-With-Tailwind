import React from 'react'

const appointmentOptions = ({appointmentOptions,setTreatment}) => {
    const {name,slots} = appointmentOptions;
  return (
    <div>
        <div className="card  shadow-xl">
             <div className="card-body text-center">
                  <h2 className="text-2xl font-bold text-accent">{name}</h2>
                  <p>{slots.length > 0 ? slots[0]:'Try Another Day'}</p>
                  <p>{slots.length } spaces Available</p>
               <div className="card-actions justify-center">
                 <label
                 disabled={slots.length === 0}
                 for="booking-modal" 
                 class="btn  btn-accent text-white"
                 onClick={()=>setTreatment(appointmentOptions)}
                 >Book Appointment</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default appointmentOptions