import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../../layout/DashboardLayout/DashboardLayout'
import Main from '../../layout/Main/Main'
import Appointment from '../../pages/Appointment/Appointment/Appointment'
import Dashboard from '../../pages/Dashboard/Dashboard/Dashboard'
import MyAppointment from '../../pages/Dashboard/MyAppointment/MyAppointment'
import Home from '../../pages/Home/Home/Home'
import Login from '../../pages/Login/Login'
import SignUp from '../../pages/SignUp/SignUp'
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/appointment',
        element: <Appointment></Appointment>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: 
      <PrivateRoutes>
        {/* <Dashboard></Dashboard> */}
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>,
      children:[
        {
          path:'/dashboard',
          element:<MyAppointment></MyAppointment>
        }
      ]
    
  },
])
export default router
