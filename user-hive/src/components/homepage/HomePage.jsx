import React from 'react'
import styles from './homepage.module.css'


const HomePage = () => {
  return (
    <section className={styles.homeContainer}>
    <header className={styles.header}>
      <h1>User Hive App</h1>
      <p>Welcome to the user management system. Manage users efficiently!</p>
    </header>
  </section>
  )
}

export default HomePage
// ==================================================
// import React from "react";
// import styles from "./homepage.module.css";

// const Homepage = () => {
//   return (
//     <div className={styles.homepage}>
//       <section className={styles.hero}>
//         <div className={styles.textSection}>
//           <p className={styles.greeting}>Hello</p>
//           <h1 className={styles.name}>I'm Saidos Hits</h1>
//           <p className={styles.description}>
//             I'm a Freelancer And Web Developer With 5+ Years Of Experience
//           </p>
//           <div className={styles.buttons}>
//             <button className='secondary-btn'>Hire Me</button>
//             <button className='primary-btn'>My Works</button>
        
//           </div>
//         </div>
//         <div className={styles.imageSection}>
//           <div className={styles.imageWrapper}>
//             <img
//               src="/pimg.png"
//               alt="Profile"
//               className={styles.profileImage}
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Homepage;
