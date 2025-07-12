import React from "react";
import "./Css/Body.css"; // Make sure you include the CSS below

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video
        className="video-background"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source
          src="https://arcadeum.s3.us-west-2.amazonaws.com/output.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>

      <div className="overlay-content h-100  " style={{marginTop:"24%"}}>
      <section class="hero-section">
  <div class="content">
    <span class="label">AVAILABLE WITH ARCADEUM PASS</span>
    <h1>Arcadeum™ Cloud Arena 3 + 4</h1>
    <p>The future of play is here. Jump in instantly with Arcadeum Cloud Pass or Ultimate.</p>
    <div class="buttons">
      <a href="#" class="btn primary">JOIN ARCADEUM PASS</a>
      <a href="#" class="btn secondary">GET IT NOW</a>
    </div>
  </div>
</section>


      </div>
    </div>
  );
};

export default BackgroundVideo;
