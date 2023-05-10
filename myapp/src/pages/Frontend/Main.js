import React from 'react';
import Sidebar from './Sidebar';
import Home from './Home';

export default function Main() {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-2" style={{ height: "100vh", overflow: "auto" }}>
            <Sidebar />
          </div>
          <div className="col-10" style={{ height: "100vh", overflow: "auto" }}>
            <Home />
          </div>
        </div>
      </div>
    </>
  );
}
