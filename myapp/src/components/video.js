import React from 'react'
import thumbnail from '../Asserts/images/thumbnail.jpg'

export default function Video() {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-12">
          <img src={thumbnail} alt="" />
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-2 d-flex justify-content-center my-md-3">
              <i className="fa-solid fa-user ms-2 fs-3"></i>
            </div>
            <div className="col-10">
              <div className="row">
                <div className="col-12">
                  <p className="m-0">
                    🔴 Modern React Web Development Full Course - 11 Hours
                  </p>
                  <div className="col mb-2">
                    <p className="m-0">zeeshan Khaliq</p>
                    <div>
                      <span>19k Views</span>
                      <span className='ms-2'>19 hours ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
