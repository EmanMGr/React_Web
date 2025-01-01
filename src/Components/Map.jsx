import React from "react";
function ContactSection() {
    return (
      <section id="contact" className="content-section">
        <div id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d297394.5681265795!2d31.04691258514985!3d31.274278460197307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f9d80f90a4f07%3A0x3a5065a823d50e16!2sBalqas%2C%20Mansoura%2C%20Dakahlia!5e0!3m2!1sen!2seg!4v1698222546949" width="100%"  height="400px"  frameborder="0"  style={{border:"0px"}}  allowfullscreen=""></iframe>
        </div>
        <div id="contact-content">
          <div className="section-heading">
            <h1>Contact<br /><em>Sentra</em></h1>
            <p>An important site for accessing resources, a way to help communicate accurately...</p>
          </div>
          <div className="section-content">
            <form id="contact" action="#" method="post">
              <div className="row">
                <div className="col-md-4">
                  <fieldset>
                    <input name="name" type="text" className="form-control" id="name" placeholder="Your name..." required />
                  </fieldset>
                </div>
                <div className="col-md-4">
                  <fieldset>
                    <input name="email" type="email" className="form-control" id="email" placeholder="Your email..." required />
                  </fieldset>
                </div>
                <div className="col-md-4">
                  <fieldset>
                    <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject..." required />
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your message..." required></textarea>
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="btn">Send Message Now</button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
  export default ContactSection;
  