import React from 'react'
import Logo from "../images/photo-grid.png";

export default function Gallery() {
  return (
    <div>
    <div>
      <img src={Logo} alt="photogrid"/>
      </div>
      <div>
      <h2>All made possible by hosts on Airbnb.</h2>
      <p>Search & Book Your Stay on Airbnb.co.in Today. Powered By Locals. Enjoyed By All. Entire Homes. Full Kitchens. Swimming Pools. Air Conditioning. Wifi.

Types: Apartments, Rooms, Flats, Entire Homes, B&Bs</p>
    </div>
    </div>
  )
}
