import React from "react";
import img1 from './img/pexels-jakubzerdzicki-18464522.jpg';
import img2 from './img/pexels-introspectivedsgn-12689714.jpg';
import img3 from './img/pexels-jakubzerdzicki-28940390.jpg';
import img4 from './img/pexels-jakubzerdzicki-16423102.jpg';
import img5 from './img/pexels-jakubzerdzicki-28117882.jpg';
import img6 from './img/pexels-scottwebb-430208.jpg';
function ProjectsSection() {
    return (
      <section id="projects" className="content-section">
        <div className="section-heading">
          <h1>Recent<br /><em>Projects</em></h1>
          <p>Important and simplified products for quick purchase</p>
        </div>
        <div className="section-content">
          <div className="masonry">
              <div className="item">
            <div className="row">
                <div className="col-md-4">
                  <a href="#!" data-lightbox="image">
                    <img src={img1} alt="Project" />
                  </a>
                </div>
                <div className="col-2">
                  <a href="#!" data-lightbox="image">
                    <img src={img2} alt="Project" />
                  </a>
                </div>
                <div className="col-2">
                  <a href="#!" data-lightbox="image">
                    <img src={img3} alt="Project" />
                  </a>
                </div>
                <div className="col-2">
                  <a href="#!" data-lightbox="image">
                    <img src={img4} alt="Project" />
                  </a>
                </div>
                <div className="col-2">
                  <a href="#!" data-lightbox="image">
                    <img src={img5} alt="Project" />
                  </a>
                </div>
                
              </div>
              <div className="col-8">
                  <a href="#!" data-lightbox="image">
                    <img src={img6} alt="Project" />
                  </a>
                </div>
              {/* إضافة المزيد من العناصر هنا */}
            </div>
          </div>
        </div>
      </section>
    );
  }
  export default ProjectsSection;
