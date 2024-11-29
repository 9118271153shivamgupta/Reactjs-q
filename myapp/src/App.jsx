    // import Navbar from "./components/Navbar";
    // import NavbaeCBC from "./components/NavbarCBC";
import Counter from "./states/fbc/Counter";
import Heart from "./states/fbc/Heart";
import States from "./states/fbc/States";

const App =  ()=>{
    return(
<div>
<h1> I am App components</h1>

    {/* <h1>I am function Based React Components</h1>
        <Navbar />
        <h1> This is Class based React Components</h1>
        <NavbaeCBC /> */}
        
        <States />
        <Counter />
        <Heart />
</div>

    )
};
export default App;