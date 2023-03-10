import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../pages/shared/Navbar/Navbar'

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawar" type="checkbox" className="drawer-toggle" />
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
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
