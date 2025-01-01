import React from "react";
// import Feature from '../Components/Feature'

function Slider() {
    return (
      <div className="slider">
        <div className="Modern-Slider content-section" id="top">
          <div className="item item-1">
            <div className="img-fill">
              <div className="image"></div>
              <div className="info">
                <h1>
                  <small style={{ color: 'aliceblue', fontSize: '40px', fontWeight: '200' }}>
                    <b>Stay safe with the best <br /> surveillance cameras</b>
                  </small>
                </h1>
                <p>We offer advanced surveillance cameras that guarantee <br /> you a clear, high-quality view around the clock.</p>
                <div className="white-button button">
                  <a href="#featured">Discover More</a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      {/* <Feature/> */}
      </div>
      
    );
  }

  export default Slider;