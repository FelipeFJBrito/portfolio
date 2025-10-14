import { BrowserRouter } from "react-router-dom";//using for routing

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
    {/* Wraping everything in a Browser component is going to allow us to rout*/}
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Feedbacks />
        <Experience />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />{/*Our star animation*/}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
