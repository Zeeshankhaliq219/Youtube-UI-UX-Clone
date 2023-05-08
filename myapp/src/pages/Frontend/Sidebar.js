import React from 'react'
import {sidebarData} from "../../Data/SideBarData";

export default function Sidebar() {
  return (
    <>
      {sidebarData.map(side => {
        return (
          <>


            <div className="container">
              <div className="row d-flex align-items-center ">
                <h1 className='fs-5'>{side.heading}</h1>
                <div className="col-2">
                  <i className={`${side.icon} fs-5 py-3`}  ></i>
                </div>
                <div className="col-9">
                  <span className='fs-6'>{side.title}</span>
                </div>
                {side.id == 3 && <hr/> }
                {side.id == 7 && <hr/> }
                {side.id == 13 && <hr/> }
              </div>

          </div>

          
          </>
        )
      })}
      
    </>
  )
}
