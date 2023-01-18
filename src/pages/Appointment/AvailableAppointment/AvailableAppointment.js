import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import Loading from '../../shared/Loading/Loading'
import BookingModal from '../BookingModal/BookingModal'
import AppointmentOptions from './AppointmentOptions'



const AvailableAppointment = ({selectedDate}) => {
    // const [appointmentOptions,setAppointmentOptions] = useState([])
    const [treatment,setTreatment] = useState(null)
    const date = format(selectedDate, 'PP')

//load data using await function (promise)
    const {data:appointmentOptions = [],refetch,isLoading} = useQuery({
      queryKey:['appointmentOptions',date],
      queryFn:async () =>{
        const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
        const data = await res.json()
        return data;
      }
    })
    if(isLoading){
      return<Loading></Loading>
    }
//load data using fetch response
    // const {data:appointmentOptions = [],isLoading} = useQuery({
    //   queryKey:['appointmentOptions'],
    //   queryFn:()=>
    //   fetch('http://localhost:5000/appointmentOptions')
    //   .then(res => res.json())
    // })


// load data using fetch and useeffect

    // useEffect(()=>{

    //     fetch('http://localhost:5000/appointmentOptions')
    //     .then(res => res.json())
    //     .then(data =>setAppointmentOptions(data))
    // },[])
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
          {/* if there is no treatment the modal will not open */}
       {treatment &&
           <BookingModal
           selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch = {refetch}
          ></BookingModal>
       }
    </section>
  )
}

export default AvailableAppointment