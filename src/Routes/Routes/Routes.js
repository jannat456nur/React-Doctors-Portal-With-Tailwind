import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../../layout/DashboardLayout/DashboardLayout'
import Main from '../../layout/Main/Main'
import Appointment from '../../pages/Appointment/Appointment/Appointment'
import AddDoctor from '../../pages/Dashboard/AddDoctor/AddDoctor'
import AllUsers from '../../pages/Dashboard/AllUsers/AllUsers'
import Dashboard from '../../pages/Dashboard/Dashboard/Dashboard'
import ManageDoctors from '../../pages/Dashboard/ManageDoctors/ManageDoctors'
import MyAppointment from '../../pages/Dashboard/MyAppointment/MyAppointment'
import Home from '../../pages/Home/Home/Home'
import Login from '../../pages/Login/Login'
import SignUp from '../../pages/SignUp/SignUp'
import AdminRoute from '../AdminRoute/AdminRoute'
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
        },
        {
          path:'/dashboard/allusers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'/dashboard/adddoctor',
          // element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
          element:<AddDoctor></AddDoctor>
        },
        {
          path:'/dashboard/managedoctors',
          // element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
          element:<ManageDoctors></ManageDoctors>
        },
      ]
    
  },
])
export default router
