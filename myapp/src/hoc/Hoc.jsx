import React from 'react'

const Hoc = (WrappedComp) => {
    let data = "hello Shivam"
  return  function (){
     return (
        < WrappedComp data={data} />

     )
  }
    
  
}

export default Hoc
