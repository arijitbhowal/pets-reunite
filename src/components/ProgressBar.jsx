import React, { useEffect } from 'react';
import $ from 'jquery';

import './ProgressBar.css';

function ProgressBar() {
  useEffect(() => {
    function handleStepClick(stepIndex) {
      const stepWidth = (stepIndex * 100) / 4; // Assuming 5 steps (0 to 4)
      $('#line-progress').css('width', stepWidth + '%');

      // Add or remove the active class from the clicked step
      $('#progress-bar-container li').removeClass('active');
      $('#progress-bar-container li:lt(' + (stepIndex + 1) + ')').addClass('active');

      const sectionClass = '.section-content';
      $(sectionClass).removeClass('active');
      $(sectionClass).eq(stepIndex).addClass('active');
    }

    $('#progress-bar-container li').click(function () {
      const stepIndex = $(this).index();
      handleStepClick(stepIndex);
    });

    // Initialize the progress bar
    handleStepClick(0);
  }, []);

  return (
    <div className='progress'>
      <div className='progress-header'>
        <h1>How it Works</h1>
      </div>
      <div className="process-wrapper">
        <div id="progress-bar-container">
          <ul>
            <li className="step step01 active">
              <div className="step-inner">
                <i className="fas fa-home"></i> <span className="step-text">Login</span>
              </div>
            </li>
            <li className="step step02">
              <div className="step-inner">
                <i className="fas fa-paw"></i> <span className="step-text">Report Pet</span>
              </div>
            </li>
            <li className="step step03">
              <div className="step-inner">
                <i className="fas fa-phone"></i> <span className="step-text">Contact Owner</span>
              </div>
            </li>
            <li className="step step04">
              <div className="step-inner">
                <i className="fas fa-users"></i> <span className="step-text">Reunion</span>
              </div>
            </li>
            <li className="step step05">
              <div className="step-inner">
                <i className="fas fa-star"></i> <span className="step-text">Success Stories</span>
              </div>
            </li>
          </ul>

          <div id="line">
            <div id="line-progress"></div>
          </div>
        </div>

        <div id="progress-content-section">
          <div className="section-content discovery active">
            <h2>Login</h2>
            <p className="progress-details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              neque justo, consequat non fermentum ac, tempor eu turpis.
              Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex.
              Nulla in dapibus lorem. Suspendisse vitae velit ac ante
              consequat placerat ut sed eros. Nullam porttitor mattis mi, id
              fringilla ex consequat eu. Praesent pulvinar tincidunt leo et
              condimentum. Maecenas volutpat turpis at felis egestas
              malesuada. Phasellus sem odio, venenatis at ex a, lacinia
              suscipit orci.
            </p>
          </div>

          <div className="section-content strategy">
            <h2>Report Pet</h2>
            <p className="progress-details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              neque justo, consequat non fermentum ac, tempor eu turpis.
              Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex.
              Nulla in dapibus lorem. Suspendisse vitae velit ac ante
              consequat placerat ut sed eros. Nullam porttitor mattis mi, id
              fringilla ex consequat eu. Praesent pulvinar tincidunt leo et
              condimentum. Maecenas volutpat turpis at felis egestas
              malesuada. Phasellus sem odio, venenatis at ex a, lacinia
              suscipit orci.
            </p>
          </div>

          <div className="section-content creative">
            <h2>Contact Owner</h2>
            <p className="progress-details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              neque justo, consequat non fermentum ac, tempor eu turpis.
              Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex.
              Nulla in dapibus lorem. Suspendisse vitae velit ac ante
              consequat placerat ut sed eros. Nullam porttitor mattis mi, id
              fringilla ex consequat eu. Praesent pulvinar tincidunt leo et
              condimentum. Maecenas volutpat turpis at felis egestas
              malesuada. Phasellus sem odio, venenatis at ex a, lacinia
              suscipit orci.
            </p>
          </div>

          <div className="section-content production">
            <h2>Reunion</h2>
            <p className="progress-details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              neque justo, consequat non fermentum ac, tempor eu turpis.
              Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex.
              Nulla in dapibus lorem. Suspendisse vitae velit ac ante
              consequat placerat ut sed eros. Nullam porttitor mattis mi, id
              fringilla ex consequat eu. Praesent pulvinar tincidunt leo et
              condimentum. Maecenas volutpat turpis at felis egestas
              malesuada. Phasellus sem odio, venenatis at ex a, lacinia
              suscipit orci.
            </p>
          </div>

          <div className="section-content analysis">
            <h2>Success Stories</h2>
            <p className="progress-details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              neque justo, consequat non fermentum ac, tempor eu turpis.
              Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex.
              Nulla in dapibus lorem. Suspendisse vitae velit ac ante
              consequat placerat ut sed eros. Nullam porttitor mattis mi, id
              fringilla ex consequat eu. Praesent pulvinar tincidunt leo et
              condimentum. Maecenas volutpat turpis at felis egestas
              malesuada. Phasellus sem odio, venenatis at ex a, lacinia
              suscipit orci.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
