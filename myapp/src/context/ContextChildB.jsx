import React, { useContext } from 'react'
import { GlobalData } from './Contextparent'


const ContextChildB = () => {
    let val = useContext(GlobalData);
    console.log(val)
  return (
    <div>
      <h1> consuming data from Context</h1>
      {
        val?.map((ele)=>{
            let{id ,text}=ele;
            return(
                <section key={id}>
                <h1> message:{text}</h1>
                </section>
            )

        })
      }
    </div>
  )
}

export default ContextChildB
