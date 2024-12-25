// import React, { useEffect, useState } from 'react'

// const FetchApi = () => {
//     let [dbData, setDbData] =useState(null)
//     console.log(dbData)
//     useEffect(()=>{
//          async function fetchData(){
//             // let response = await fetch("https://api.github.com/users")
//             // let response = await fetch("https://jsonplaceholder.typicode.com/todos")
//             let response = await fetch("https://fakestoreapi.com/products")
//             console.log(response);
            
//             let data = await response.json()

//             // console.log(data)
//             // setDbData(dbData)
//             setDbData(data)
//         //  console.log(response)
//          }
//          fetchData()
//     }, [])
//     console.log(dbData)
//   return (
//     <div>
//       <h1>Fetch API</h1>
//       {
//         dbData?.map((ele)=>{
//             return(
//                 <section key={ele.id}>
//                 {/* <h1>{ele.login}</h1>//! first api call pr */}
//                     <h1>{ele.title}</h1>
//                 {/* <img src={ele.avatar_url} alt="" height={200}  width={200}/> */}
//                 </section>
//             )

//         })
//       }
//     </div>
//   )
// }

// export default FetchApi

//! ===========================================Rivision Classess==========================================

import React, { useEffect, useState } from 'react'
import style from "./fetchApi.module.css"

const FetchApi = () => {
   let [users, setUser] =useState(null);

   useEffect(()=>{
     async function fetchUsers(){
        // let resp=await fetch("https://jsonplaceholder.typicode.com/todos");
        // let resp=await fetch("https://api.github.com/users");
        let resp=await fetch("https://jsonplaceholder.typicode.com/photos");
        let data = await resp.json();
        setUser(data)
      
     }
     fetchUsers()
   },[])
   console.log(users)
  return (
    <div id={style.usersContainer}>
      <h1>
        All data
      </h1>

      {

        users?.map((ele)=>{
          {/* let {login,avatar_url,type,id }=ele; */}
          let{url,title,id,albumId}=ele;
          return(
            <section key={id} className={style.user}>
            <img src={url} alt='' height={100} width={100} />
            <h4>AlbumId:{albumId}</h4>
            <h5>Title:{title}</h5>
              {/* <img src={avatar_url} alt="" />
              <h1>name: {login}</h1>
              <h4>Type:{type}</h4> */}
              <button>View more</button>
            </section>
          )
        })
      }
    </div>
  )
}

export default FetchApi;
