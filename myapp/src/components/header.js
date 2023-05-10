import React from "react";

export default function header() {
  return (
    <div className="container-fluid position-fixed top-0">
      <div className="row py-1 bg-white">
        <div className="col-3 align-items-center d-flex ">
          <i className="fa-solid fs-5 ms-1 fa-bars"></i>
          <div className="d-flex align-items-center ms-md-3">
            <i className="fa-brands fs-3 text-primary fa-youtube"></i>
            <span className="fs-5 fw-bold">YouTube</span>{" "}
            <sup className="ms-1">pk</sup>
          </div>
        </div>
        <div className="col-6  rounded-pill ">
          <div className="border border-black  rounded-pill py-2 d-flex align-items-center justify-content-between">
            <input
              className="w-100 ms-md-2 py-1 px-2 border-0"
              type="text"
              placeholder="Search"
            />
            <div className="border-start ps-4 ">
              <i className="fa-solid fa-search  fs-6 float-end me-md-4"></i>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-end">
          <div className="btn-group dropdown rounded-circle">
            <button
              type="button"
              className="btn"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-offset="-160%,5"
            >
              <i class="fa-solid fs-5 fa-video"></i>
            </button>
            <ul className="dropdown-menu"></ul>
          </div>

          <div className="btn-group dropdown rounded-circle ms-md-3">
            <button
              type="button"
              className="btn"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-offset="-160%,5"
            >
              <i className="fa-solid fs-5 fa-bell"></i>
            </button>
            <ul className="dropdown-menu"></ul>
          </div>

          <div className="btn-group dropdown rounded-circle ms-md-3">
            <button
              type="button"
              className="btn "
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-offset="-160%,5"
            >
              <i className="fa-solid fs-5 fa-user "></i>
            </button>
            <ul className="dropdown-menu"></ul>
          </div>
        </div>
      </div>
    </div>
  );
}
