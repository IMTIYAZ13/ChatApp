import React from "react";

const Hero = () =>{
    const Link ="https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtZXxlbnwwfHwwfHw%3D&w=1000&q=80"
  return(
     <img src={Link} alt={"Hero img"} style={{opacity:"0.5"}}  width ="100%" height="100%" />
  )
}
export default Hero;