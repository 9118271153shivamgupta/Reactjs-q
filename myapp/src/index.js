import {createRoot} from "react-dom/client";
import "./global.css"
import App from "./App"
let div = document.querySelector("#root");

createRoot(div).render(<App />);
// createRoot(div).render(<h1> Wellcome to react World</h1>);