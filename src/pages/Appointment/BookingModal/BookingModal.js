import { format } from 'date-fns';
import React from 'react'

const BookingModal = ({treatment,selectedDate}) => {

    const {name,slots} = treatment;//treatment is appointment options just different name
    const date = format(selectedDate, 'PP')
  return (
    <div>
        <input type="checkbox" id="booking-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold">{name}</h3>
    <form className='grid grid-cols-1  gap-6 mt-10'>
        <input type="text" value={date} disabled class=" input input-bordered w-full " />
       <select class="select select-bordered w-full">
           {
            slots.map(slot=><option value={slot}>{slot}</option>)
           }
           
     </select>
        <input type="text" value={selectedDate} class="input input-bordered w-full " />
        <input type="text" value={selectedDate} class="input input-bordered w-full " />
        <input type="text" value={selectedDate} class="input input-bordered w-full " />
        <input type="submit"value="Submit" class=" btn btn-active  input w-full text-dark" />
    </form>
   
  </div>
</div>
    </div>
  )
}

export default BookingModal