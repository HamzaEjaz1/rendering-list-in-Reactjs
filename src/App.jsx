import React from 'react'
import Card from './Card'
import Data from './Data'
import './App.css'
const nCard = (val) =>{
return(
 <Card
 id={val.id}
//  src={val.src}  
 name={val.name}
 RegNumber={val.RegNumber}
 uniName={val.uniName}
 
 />
)
}
const App = () => {


  return (
    <div>
      <h1 style={{textAlign:'center'}}>Rendering List Data In React Js</h1>


<div className="main" style={{display:"flex",justifyContent:'space-between',alignItems:'center', flexWrap:'wrap',flexDirection:'column'}}>
{Data.map(nCard)}
</div>
    </div>

  )
}

export default App
