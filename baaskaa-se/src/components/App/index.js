import About from "../../Page/About";
import Blog from "../../Page/Blog";
import Clients from "../../Page/Clients";
import Contact from "../../Page/Contact";
import Counters from "../../Page/Counters";
import Portfolia from "../../Page/Portfolia";
import Price from "../../Page/Price";
import Service from "../../Page/Service";
import Teams from "../../Page/Teams";
import Footer from "../Footer";
import Header from "../Header";

function App() {
  return (
    <div className="page-wrapper" id="top">
      <Header />
      <About />
      {/* <Counters /> */}
      <Service />
      {/* <Price /> */}
      <Portfolia />
      {/* <Teams /> */}
      {/* <Clients /> */}
      <Blog />
      <Contact />
      <Footer/>
     <div id="preloader">
       <div id="loader"></div>
     </div>
     
     <a href="javascript:void()" className="scroll-top-btn" data-scroll-goto="1">
       <span className="fa fa-angle-up"></span>
     </a>
    </div>
  );
}

export default App;
