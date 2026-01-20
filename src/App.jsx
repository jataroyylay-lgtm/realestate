import Compain from "./Component/Compain/Compain";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import Resident from "./Component/Resident/Resident";
import Value from "./Component/Value/Value";
import Contact from "./Component/Contact/Contact";
import Getstart from "./Component/Getstart/Getstart";
import Footer from "./Component/Footer/Footer";
function App(){

  return(
   <div className="App">
    <Header/>
    <Hero/>
    <Compain/>
    <Resident/>
    <Value/>
    <Contact/>
    <Getstart/>
    <Footer/>
   </div>
   
  );
}
export default App;