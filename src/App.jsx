import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";


function App() {
 
    return (
    
    <div>
    {/* <Login/> */}
   {/* navbar */}
    <Navbar/>
   {/* content */}
     <HomePage/>
  {/* Footer */}
    <Footer/>
   </div>
    );
  };
    

export default App
