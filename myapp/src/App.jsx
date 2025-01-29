    // import Navbar from "./components/Navbar";
    // import NavbaeCBC from "./components/NavbarCBC";
// import Contex from "./context/Contex";
// import User from "./context/User";
// import Products from "./customHooks/Products";//!Custom Hooks
// import PracticeLifeCycle from "./lifecycle/PracticeLifeCycle";
// import Parent from "./props/Parent";  //! props line
// import PropsDrillingPraent from "./propsdrilling/PropsDrillingPraent";
// import FlipNavbar from "./flipkartnav/FlipNavbar";
// import FlipkartNav from "./task1/FlipkartNav";
// import ControlledForms1 from "./forms/ControlledForms1";
// import ControlledForms2 from "./forms/ControlledForms2";
// import TodoWrapper from "./todoapp/TodoWrapper.jsx";//! TODOAPP
import Amazon from "./task2/Amazon";//! Amazon nav bar
// import Profile from "./images/Profile";
// import Footer from "./reactcss/Footer";
// import InlineCSS from "./reactcss/InlineCSS";
// import StateInCBC from "./states/cbc/StateInCBC";
// import Counter from "./states/fbc/Counter";
// import Heart from "./states/fbc/Heart";
// import States from "./states/fbc/States";

// import UnControlledForms from "./forms/UnControlledForms";
import { useState } from "react";
// import Reducer from "./reducer/Reducer";//& ignore this error
// import PracticeReducer from "./reducer/PracticeReducer";
import HocParent from "./hoc/HocParent";
import MemoParent from "./memo/MemoParent";
import MyComponents from "./erroeboundries/MyComponents";
import ErrorBoundry from "./erroeboundries/ErrorBoundry";
import PracticeControlledForm from "./forms/PracticeControlledForm";


// import LifeCycle from "./lifecycle/LifeCycle";
// import SideEffect from "./useEffect/SideEffect";
// import SideEffect2 from "./useEffect/SideEffect2";
// import FetchApi from "./fetch/FetchApi";
// import Contextparent from "./context/Contextparent"; //!ContextHooks
// import RefExapmle from "./refs/RefExample";
// import { RefExamplepractice } from "./refs/RefExamplepractice";//! practice

// import TodoWrapper2 from "./todoapp2/TodoWrapper2";


const App =  ()=>{
    let[toggle, setToggle] =useState(false)
    return(
<div>
{/* <h1> I am App components</h1> */}

    {/* <h1>I am function Based React Components</h1>
        <Navbar />
        <h1> This is Class based React Components</h1>
        <NavbaeCBC /> */}
        
        {/* <States />
        <Counter />
        <Heart /> */}
        {/* <StateInCBC /> */}
        {/* <Parent /> */}
        {/* <PropsDrillingPraent /> */}
        {/* <InlineCSS /> */}
        {/* <Footer /> */}
        {/* <Profile /> */}
        {/* <FlipNavbar /> */}
        {/* <FlipkartNav /> */}
        {/* <Amazon /> */}
        {/* <ControlledForms1 />
        <ControlledForms2 /> */}
        {/* ============================ */}
        {/* <TodoWrapper /> */}
        {/* <TodoWrapper2 />  practice*/}
        {/* <RefExapmle />
        <UnControlledForms /> */}
        {/* <RefExamplepractice /> */}
     {/* //!   =======================imp(life Cycle Method of react )====================== */}
        {/* <button onClick={()=>{setToggle(!toggle)}}>Toggle Switch</button>
        {toggle? <LifeCycle /> :<h1> No Component here</h1>} */}
        {/* <SideEffect/> */}
        
        {/* <button onClick={()=>setToggle(!toggle)}>Toggle me</button>
        {toggle ? <SideEffect2/> : <h1> no component here</h1>} */}
{/* //^ =========================Practice Life Cycle Method======================================== */}
        {/* <button onClick={()=>setToggle(!toggle)}> switch </button>
        {toggle ?  <PracticeLifeCycle />:<h1> no compoent</h1>} */}

        {/* =========================================================== */}
        {/* //! Fetch Api  */}
        {/* <FetchApi/> */}
        {/* //! ContextApi  */}
        {/* <Contextparent /> */}
{/* //^====================================================================== */}
        {/* <Contex>
            <User />
        </Contex> */}
        {/* //^==============Custom Hooks======================= */}
                        {/* <Products /> */}

        {/* //^ Reducer Hooks ======================================*/}
                        {/* <Reducer/> */}
                        {/* <PracticeReducer /> */}

        {/* //^  =========HOC in React===================================== */}
                {/* <HocParent /> */}

        {/* //^===========useMemo============================ */}
        {/* <MemoParent/> */}
{/* //^==MY Component=============== */}
       {/* <ErrorBoundry>
            <MyComponents/>
       </ErrorBoundry> */}

       //& Practice  Controlled Form=========================
       <PracticeControlledForm/>
</div>

    )
};
export default App;