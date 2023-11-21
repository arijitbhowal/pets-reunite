import React, { useEffect } from "react";
import $ from "jquery";

import "./ProgressBar.css";

function ProgressBar() {
  useEffect(() => {
    function handleStepClick(stepIndex) {
      const stepWidth = (stepIndex * 100) / 4; // Assuming 5 steps (0 to 4)
      $("#line-progress").css("width", stepWidth + "%");

      // Add or remove the active class from the clicked step
      $("#progress-bar-container li").removeClass("active");
      $("#progress-bar-container li:lt(" + (stepIndex + 1) + ")").addClass(
        "active"
      );

      const sectionClass = ".section-content";
      $(sectionClass).removeClass("active");
      $(sectionClass).eq(stepIndex).addClass("active");
    }

    $("#progress-bar-container li").click(function () {
      const stepIndex = $(this).index();
      handleStepClick(stepIndex);
    });

    // Initialize the progress bar
    handleStepClick(0);
  }, []);

  return (
    <div className="how-it-works">
      <h1 className="progress-header">How it Works</h1>
      <br />
      <div className="process-wrapper">
        <div id="progress-bar-container">
          <ul>
            <li className="step step01 active">
              <div className="step-inner">
                <i className="fas fa-home"></i>{" "}
                <span className="step-text">Login</span>
              </div>
            </li>
            <li className="step step02">
              <div className="step-inner">
                <i className="fas fa-paw"></i>{" "}
                <span className="step-text">Report Pet</span>
              </div>
            </li>
            <li className="step step03">
              <div className="step-inner">
                <i className="fas fa-phone"></i>{" "}
                <span className="step-text">Contact Owner</span>
              </div>
            </li>
            <li className="step step04">
              <div className="step-inner">
                <i className="fas fa-users"></i>{" "}
                <span className="step-text">Reunion</span>
              </div>
            </li>
            <li className="step step05">
              <div className="step-inner">
                <i className="fas fa-star"></i>{" "}
                <span className="step-text">Success Stories</span>
              </div>
            </li>
          </ul>

          <div id="line">
            <div id="line-progress"></div>
          </div>
        </div>

        <div id="progress-content-section">
          <div className="section-content discovery active">
            <h2>LOGIN</h2>
            <p>
              After successfully registering on the 'Pets Reunite' website, you
              can effortlessly log in using your email and password. Following
              validation, you'll be directed to our homepage where you can
              discover the core mission of our platform in the "About Us"
              section. Spot the user profile button in the top right corner, a
              gateway to a personalized webpage. Within this space, you have the
              freedom to customize your profile and review the information
              you've submitted. If you happen to forget your password, worry
              not! A simple click allows you to reset it effortlessly.
            </p>
          </div>

          <div className="section-content strategy">
            <h2>REPORT PET</h2>
            <p>
              To report a lost or found pet on our homepage, simply click on the
              respective buttons or explore the dedicated options in the
              dropdown menu under 'Lost and Found' in the navbar. You'll be
              seamlessly redirected to a detailed form where you can provide
              specific information about the pet, enhancing the chances of
              recognition. For precise location details, utilize our Geo Coder
              at the bottom of the form, providing latitude and longitude
              values. Our website boasts a unique map handy toggle feature for
              lost and found location pins. Click on the pins to uncover
              detailed information about the respective pets. Take advantage of
              the advanced search filter, that can be accessed through the
              navbar, to pinpoint lost or found pets based on specific criteria,
              such as the number of days since the report was filed. Explore
              further details and connect with the report filers by simply
              clicking on any card.
            </p>
          </div>

          <div className="section-content creative">
            <h2>CONTACT OWNER</h2>
            <p>
              Once you have recognised any of the pets reported, you may contact
              the person who filed the report. By reaching out to the
              individuals who filed the reports, you play a crucial role in
              reuniting lost pets with their rightful owners. Although, when
              contacting others through our platform, it's essential to uphold a
              respectful and considerate approach. Keep in mind the following
              guidelines: - Respect Privacy: Avoid requesting or sharing
              personal information that is not directly relevant to the pet
              reunification process. Prioritize the safety and privacy of all
              parties involved. - Clear Communication: Be clear and concise in
              your messages. Provide essential details related to the lost or
              found pet without unnecessary elaboration. - Empathy: Understand
              that individuals on both ends may be going through a stressful
              situation. Show empathy and compassion in your communication. -
              Verification: If you're the one filing the report, verify the
              identity of the person reaching out to you. Ask for relevant
              details about the pet or the situation to ensure a legitimate
              connection. - Meeting in Public: When arranging to meet to reunite
              a pet, choose a public and neutral location. This ensures the
              safety and comfort of all parties involved.
            </p>
          </div>

          <div className="section-content production">
            <h2>REUNION</h2>
            <p>
              As we connect owners with their beloved pets, we're not just
              achieving our goal but spreading joy in our own small ways. Every
              reunion is a moment of happiness, a testament to the impact we can
              make together. By fostering these heartwarming connections, we
              create a ripple effect of joy, one lost pet at a time. It's the
              small acts of reuniting owners with their furry friends that
              collectively make a big difference, filling hearts with warmth and
              smiles across our community. Your actions contribute to the
              fulfillment of our website's goal — bringing joy, happiness, and
              achieving the heartwarming reunions we aim for. Together, we make
              a difference in the lives of both pets and their owners, creating
              a community built on care, compassion, and the shared love for our
              four-legged friends.
            </p>
          </div>

          <div className="section-content analysis">
            <h2>SUCCESS STORIES</h2>
            <p>
              Celebrate Your Pet Reunion Journey with the "Pets Reunite"
              Community! At "Pets Reunite," we invite you to share your
              heartwarming success stories of reuniting lost pets with their
              loving owners. Login to your account and click on the "Success
              Stories" button in the home page. Craft a narrative that reflects
              your unique journey—capturing the challenges, emotions, and the
              ultimate joy of a successful reunion.By sharing your story, you
              not only celebrate the power of community and compassion but also
              inspire others facing similar challenges. Your experience
              contributes to building a supportive environment, offering
              valuable guidance, and spreading joy within our community. Each
              shared success story is a testament to the collective strength of
              our "Pets Reunite" family, proving that, together, we can make a
              significant impact and bring happiness to both pets and their
              owners. Join us in creating a network of shared experiences,
              support, and, most importantly, the celebration of reuniting
              hearts and paws! Reading success stories on "Pets Reunite" isn't
              just about celebrating reunions; it's about spreading joy and
              making a positive impact. For someone going through a challenging
              time, your story might be the beacon of hope they desperately
              need. It's a reminder that even in the face of adversity, there
              are heartwarming moments waiting to unfold. By sharing these
              stories, you contribute to a collective well of positivity,
              offering comfort, inspiration, and a shared sense of triumph.
              Together, our stories become a powerful force, radiating
              positivity and kindness, one reunion at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
