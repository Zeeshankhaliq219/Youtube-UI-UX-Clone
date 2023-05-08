import React from 'react';
import Sidebar from './Sidebar';
import Home from './Home';

export default function Main() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2" style={{ height: "100vh", overflow: "auto" }}>
            <Sidebar />
          </div>
          <div className="col-10 bg-info">
            <Home />
          </div>
        </div>
      </div>
    </>
  );
}
