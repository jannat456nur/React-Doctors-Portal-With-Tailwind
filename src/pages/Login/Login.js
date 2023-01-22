import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider'
import useToken from '../../hooks/useToken'

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const { signIn } = useContext(AuthContext)
  const [loginError, setLoginError] = useState('')
  const [loginUserEmail,setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail)
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/';
  if (token){
     navigate(from, { replace: true })
  }

  //set login
  const handleLogin = (data) => {
    console.log(data)
    setLoginError('')
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user
        console.log(user)
        //use for jwt token
        // setLoginUserEmail(data.email)
        navigate(from, { replace: true })
        
       
      })
      .catch((error) => {
        console.log(error.message)
        setLoginError(error.message)
      })
  }
  return (
    <div className="h-[500px] flex justify-center items-center">
      <div className="w-96 p-6">
        <h2 className="text-4xl text-center"> Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register('email', { required: 'Email Address is required' })}
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
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <span className="label-text">Forgot Password</span>
            </label>
          </div>
          <input type="submit" className="btn w-full" value="login" />
          <div>
            {/* if it get any errorwe can see */}
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p>
          New to Doctor Portal ?
          <Link to="/signup" className="text-accent">
            Create New Account
          </Link>
        </p>
        <div class="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  )
}

export default Login
