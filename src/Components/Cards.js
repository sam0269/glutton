import React from 'react'
import '../style.css';

const Box = (props) =>{
    return(
        <>
           <div className="image_container" style={{height:props.height,width:props.width,borderRadius:"1.2rem"}}>
            <figure>
               <img src={props.link} alt="cuisine1" style={{height:props.height,width:props.width}}/>
               <figcaption>
               {props.heading}
               </figcaption>
            </figure>
           </div> 
        </>
    )
}


const Cards = () => {
  return (
      <>
        <div className="card-container flex-1">
            <Box link = "images/1.jpg" heading = "EAT" height= "50rem" width = "30rem"/>
            <Box link = "images/2.jpg" heading = "DRINK" height= "50rem" width = "30rem"/>
            <Box link = "images/3.jpg" heading = "LOCATION" height= "50rem" width = "30rem"/>
            <Box link = "images/4.jpg" heading = "EVENTS" height= "50rem" width = "30rem"/>
        </div> 
        <hr style={{width:"95rem",margin:"auto"}}/>
      </>
  )
}

export default Cards
export {Box}