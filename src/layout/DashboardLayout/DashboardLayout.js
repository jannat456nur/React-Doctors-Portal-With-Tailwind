import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider'
import useAdmin from '../../hooks/useAdmin'
import Navbar from '../../pages/shared/Navbar/Navbar'

const DashboardLayout = () => {
  const { user } = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
          {/* <label
            htmlFor="dashboard-drawar"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label> */}
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Appointments</Link>
              <Link to="/dashboard/adddoctor">Add a Doctor</Link>
              <Link to="/dashboard/mangeoctors">Manage Doctor</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allusers">A|ll Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/adddoctor">Add a Doctor</Link>
                </li>
                <li>
                  <Link to="/dashboard/mangeoctors">Manage Doctor</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
