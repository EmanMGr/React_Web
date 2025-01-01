import React from "react";
import img1 from './img/pexels-hazily-light-672092024-17854885.jpg';
import img2 from './img/pexels-introspectivedsgn-12689714.jpg';
import img3 from './img/pexels-introspectivedsgn-12689714.jpg';
import img4 from './img/pexels-introspectivedsgn-12689714.jpg';

function FeaturedSection() {
  return (
    <section id="featured" className="content-section">
      <div className="section-heading">
        <h1>Featured<br /><em>Places</em></h1>
        <p>“Smart cameras with artificial intelligence”</p>
      </div>
      <div className="section-content">
        {/* يمكنك إضافة الـ carousel هنا مثلما فعلنا في الكود السابق */}
        <div className="carousel-container">
          <div className="carousel-item">
            <img src={img1} alt="Featured" />
            <div className="text-content">
              <h4>Cameras help protect property.</h4>
              <p>#1 Cameras are considered one of the most important means of safety today...</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} alt="Featured" />
            <div className="text-content">
              <h4>Cameras help protect property.</h4>
              <p>#1 Cameras are considered one of the most important means of safety today...</p>
             </div>
           </div>
           <div className="carousel-item">
             <img src={img3} alt="Featured" />
             <div className="text-content">
               <h4>Cameras help protect property.</h4>
               <p>#1 Cameras are considered one of the most important means of safety today...</p>
             </div>
           </div>
           <div className="carousel-item">
             <img src={img4} alt="Featured" />
             <div className="text-content">
               <h4>Cameras help protect property.</h4>
               <p>#1 Cameras are considered one of the most important means of safety today...</p>
             </div>
           </div>
         </div>
      </div>
    </section>
    

   );
}
export default FeaturedSection;