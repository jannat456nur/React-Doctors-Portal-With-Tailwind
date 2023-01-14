import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider'

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  //import authprovider
  const { createUser, updateUser } = useContext(AuthContext)
  const [signUpError, setSignUpError] = useState('')
  const navigate = useNavigate()

  //set signup
  const handleSignUp = (data) => {
    //if want to sign up for again error will be clear.
    setSignUpError('')
    console.log(data)
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user
        console.log(user)
        //use toaster
        toast('User Creatyed Successfully ')
        const userInfo = {
          displayName: data.name,
        }
        //update user
        updateUser(userInfo)
          .then(() => {
              navigate('/')
          })
          .catch((err) => console.log(err))
      })
      .catch((error) => {
        console.log(error)
        setSignUpError(error.message)
      })
    // console.log(errors)
  }
  return (
    <div className="h-[500px] flex justify-center items-center">
      <div className="w-96 p-6">
        <h2 className="text-4xl text-center"> Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
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
              <span className="label-text">Password</span>
            </label>
            <input
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
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
            {/* {error.password && <p>{error.password.message}</p>} */}
            <label className="label">
              <span className="label-text">Forgot Password</span>
            </label>
          </div>
          <input on type="submit" className="btn w-full" value="Sign Up" />
        </form>
        {/* if it get any errorwe can see */}
        {signUpError && <p className="text-red-600">{signUpError}</p>}
        <p>
          Already have an account ?
          <Link to="/login" className="text-accent">
            Login your account.
          </Link>
        </p>
        <div class="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  )
}

export default SignUp
