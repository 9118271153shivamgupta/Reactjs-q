import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import App from "./App";

 createRoot(document.getElementById('root')).render(
    <Suspense fallback={<h1>loading.......</h1>}>
        <App/>
    </Suspense>
 )