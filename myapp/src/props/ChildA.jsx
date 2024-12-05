// import React from 'react';

// const ChildA = (prop) => {
//     console.log(prop.x)
//   return (
//     <div>
//       <h1> {prop.x} {prop.x2} </h1>
//     </div>
//   )
// }

// export default ChildA;


// ! first type destructureing
// import React from 'react'

// const ChildA = (x) => {
//   let {dbData}=x;
//   console.log(dbData)
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ChildA;
// ! second type


import React from 'react'

const ChildA = (x) => {
  console.log(x)//!==> dbData:{data,data2}
  let {dbData:{data, data2:{id,ename}}}=x;

  console.log(data, id, ename)
  return (
    <div>
      
    </div>
  )
}

export default ChildA
