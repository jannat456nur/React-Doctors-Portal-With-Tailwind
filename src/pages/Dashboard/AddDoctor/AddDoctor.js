// import { ResultType } from '@remix-run/router/dist/utils'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Loading from '../../shared/Loading/Loading'

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const imageHostkey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate()

  const { data: specialities, isLoading } = useQuery({
    queryKey: ['speciality'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/appointmentSpeciality')
      const data = await res.json()
    },
  })
  const handleAddDoctor = (data) => {
    console.log(data.image.FileList[0])
    const image = data.img
    const fromData = new FormData()
    FormData.append('image',image)   
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostkey}`
    fetch(url,{
      method:"POST",
      body: fromData
    })
    .then(res =>res.json())
    .then(imageData =>{
      console.log(imageData=>{
        if(imageData.success){
          console.log(image.data.url)
          const doctor ={
            name:data.name,
            email:data.email,
            speciality:data.speciality,
            image:imageData.data.url,
          }
          // save doctor information to the database
          fetch('http://localhost:5000/doctors',{
            method:'POST',
            headers:{
              'content-type':'application/json',authorization:`bearer${localStorage}`
            },
            body:JSON.stringify(doctor)
          })
          .then(res =>res.json())
          .then(result=>{
            console.log(result);
            toast.success(`${data.name} is added successfully`)
            navigate('/dashboard/manageDoctors')
          })
        }
      })
    })
    // (image)
  }
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div className="w-96 p-6">
      <h1 className="text-4xl">Add A Doctor</h1>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register('name')}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register('email', { required: 'required' })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p className="text-red-600" role="alert">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Speciality</span>
          </label>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Please select a Speciality
            </option>
            {specialities.map((speciality) => (
              <option key={speciality._id} value={speciality.name}>
                Greedo
              </option>
            ))}
          </select>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              {...register('img')}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.img && (
              <p className="text-red-600" role="alert">
                {errors.img?.message}
              </p>
            )}
          </div>
          {/* <input
              type="password"
              {...register('password', {
                required: 'Password is required.',
                minLength: {
                  value: 6,
                  message: 'Password must be in 6 character',
                  //  message: 'password must be strong',
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    'Password must have uppercase, number and special characters',
                },
              })}
              className="input input-bordered w-full max-w-xs"
            /> */}
          {/* {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )} */}
          {/* {error.password && <p>{error.password.message}</p>} */}
          {/* <label className="label">
              <span className="label-text">Forgot Password</span>
            </label> */}
        </div>
        <input on type="submit" className="btn w-full" value="Add Doctor" />
      </form>
    </div>
  )
}

export default AddDoctor;


// Three places to store images
// 1.Third pARTY image hosting server
// 2.File system of your server
// 3.mongodb(DATABASE)