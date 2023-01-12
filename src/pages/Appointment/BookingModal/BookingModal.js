import { format } from 'date-fns';
import React from 'react'

const BookingModal = ({treatment,selectedDate,setTreatment}) => {

    const {name,slots} = treatment;//treatment is appointment options just different name
    const date = format(selectedDate, 'PP')

    const handleBooking = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value

        const booking = {
            appointmentDate:date,
            treatment:name,
            patient:name,
            name,
            slot,
            email,
            phone,
        }
        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        console.log(booking)
        setTreatment(null)
    }
  return (
    <div>
        <input type="checkbox" id="booking-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold">{name}</h3>
    <form onSubmit={handleBooking} className='grid grid-cols-1  gap-6 mt-10'>
        <input type="text" value={date} disabled class=" input input-bordered w-full " />
       <select name='slot' class="select select-bordered w-full">
           {
            slots.map((slot,i)=><option
                key={i}
                value={slot}
                >{slot}</option>)
           }
           
     </select>
        <input  type="text" value={selectedDate} class="input input-bordered w-full " />
        <input name='name' type="text" placeholder='Your Name' class="input input-bordered w-full " />
        <input name='email' type="email" placeholder='Email Address' class="input input-bordered w-full " />
        <input name='phone' type="text" placeholder='Phone' class="input input-bordered w-full " />
        <input type="submit"value="Submit" class=" btn btn-active  input w-full text-dark" />
    </form>
   
  </div>
</div>
    </div>
  )
}

export default BookingModal