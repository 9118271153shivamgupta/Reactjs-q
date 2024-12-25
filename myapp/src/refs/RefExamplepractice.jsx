import React, { useRef } from 'react'

 export const RefExamplepractice = () => {
    let bgRef = useRef(null)

    let bgChanger=(color)=>{
        console.log("colored changed") 
        if (bgRef.current) {
            bgRef.current.style.backgroundColor=color;            
        }
    }
  return (
    <div ref={bgRef}
    style={{
        height:"100vh",
        width:"100vh",
        
    }}
    >   
        <div>
            <h1> this is bg Changer Project</h1>
            <div>
                <button onClick={()=>bgChanger("red")}>Red</button>
                <button onClick={()=>bgChanger("blue")}>blue</button>
                <button onClick={()=>bgChanger("black")}>black</button>
                <button onClick={()=>bgChanger("brown")}>brown</button>
                <button onClick={()=>bgChanger("violet")}>violet</button>
            </div>
        </div>
      
    </div>
  )
}






































// import React, { useRef } from "react";

// export const RefExamplepractice=()=> {
//   const bgRef = useRef(null); // Single useRef to reference the div

//   // Function to change background color
//   const changeBgColor = (color) => {
//     if (bgRef.current) {
//       bgRef.current.style.backgroundColor = color;
//     }
//   };

//   return (
//     <div
//       ref={bgRef}
//       style={{
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         transition: "background-color 0.5s ease",
//       }}
//     >
//       <div style={{ textAlign: "center" }}>
//         <h1>Background Changer</h1>
//         <div style={{ marginTop: "20px" }}>
//           <button
//             style={{ margin: "5px", padding: "10px", background: "lightblue" }}
//             onClick={() => changeBgColor("lightblue")}
//           >
//             Light Blue
//           </button>
//           <button
//             style={{ margin: "5px", padding: "10px", background: "lightgreen" }}
//             onClick={() => changeBgColor("lightgreen")}
//           >
//             Light Green
//           </button>
//           <button
//             style={{ margin: "5px", padding: "10px", background: "lightcoral" }}
//             onClick={() => changeBgColor("lightcoral")}
//           >
//             Light Coral
//           </button>
//           <button
//             style={{ margin: "5px", padding: "10px", background: "black", color: "white" }}
//             onClick={() => changeBgColor("black")}
//           >
//             Black
//           </button>
//           <button
//             style={{ margin: "5px", padding: "10px", background: "white", border: "1px solid black" }}
//             onClick={() => changeBgColor("white")}
//           >
//             White
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


