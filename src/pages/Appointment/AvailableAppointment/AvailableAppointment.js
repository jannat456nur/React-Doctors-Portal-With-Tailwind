import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import BookingModal from '../BookingModal/BookingModal'
import AppointmentOptions from './AppointmentOptions'

const AvailableAppointment = ({selectedDate,setSelectedDate}) => {
    const [appointmentOptions,setAppointmentOptions] = useState([])
    const [treatment,setTreatment] = useState(null)
    useEffect(()=>{

        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data =>setAppointmentOptions(data))
    },[])
  return (
    <section className='my-16'>
         <p className='ml-6 text-accent text-center font-bold'>You picked {format(selectedDate, 'PP')}.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
            {
                appointmentOptions.map(option=><AppointmentOptions
                key={option._id}
                appointmentOptions={option}
                setTreatment={setTreatment}
                ></AppointmentOptions>)
            }
          </div>
       {treatment &&
           <BookingModal
           selectedDate={selectedDate}
          treatment={treatment}
          ></BookingModal>
       }
    </section>
  )
}

export default AvailableAppointment