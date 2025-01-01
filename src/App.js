import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar';
// import Navbar from './Components/Navbar.jsx';
import Slider from './Components/Slider';
// import FeaturedSection from './Components/Feature.jsx';
import ProjectsSection from './Components/Project';
import ContactSection from './Components/Map';



function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Sidebar />
      <Slider />
      <ProjectsSection />
      {/* <FeaturedSection /> */}
      <ContactSection />
      <section className="footer">
      <p>Copyright &copy; 2024 Eman Gabr. Email: eman07721@gmail.com</p>
    </section>
    
    </div>
    
  );
}



export default App;
