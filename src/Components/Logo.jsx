import React from "react";
import logo from'./logo_bg.png'

function Logo({width = "20%"}) {
    return (
      <img src={logo} style={{width}} alt='Logo placeholder' />
    )
  }
  
  export default Logo