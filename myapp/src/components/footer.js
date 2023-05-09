import React from 'react'

export default function footer() {
    let year = new Date().getFullYear()
  return (
    <>
      <span className="fs-6 ">
        About Press Copyright Contact us Creators Advertise Developers Terms
        Privacy Policy & Safety How YouTube works Test new features
      </span>
      <p>© {year} Google LLC</p>
    </>
  );
}
