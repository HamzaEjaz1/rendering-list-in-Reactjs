import React from 'react'
import './App.css'
const Card = (props) => {
  return (
    <div>
      <div className="card" key={props.id}>
  {/* <img src={props.src} alt="Avatar" style={{width:'100%'}}/> */}
  <div className="container">
    <h4><b>{props.name}</b></h4>
    <p>{props.RegNumber}</p>
    <p>{props.uniName}</p>
    <p></p>
  </div>
</div>
    </div>
  )
}

export default Card
