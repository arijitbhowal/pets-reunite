import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css'; // Import the external CSS file
import {
  MDBFooter,
  MDBContainer,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div className="footer-wrapper" style={{ zIndex: 5, position: 'relative' }}>
      <MDBFooter className='bg-dark text-center text-white'>
        <MDBContainer className='p-4 pb-0'>
          <section className='mb-4'>
            <ul className='mdb-social-icons'>
              <li>
                <MDBBtn
                  floating
                  className='m-1 facebook'
                  href='#!'
                  role='button'
                >
                  <MDBIcon fab icon='facebook-f' />
                </MDBBtn>
              </li>

              <li>
                <MDBBtn
                  floating
                  className='m-1 twitter'
                  href='#!'
                  role='button'
                >
                  <MDBIcon fab icon='twitter' />
                </MDBBtn>
              </li>

              <li>
                <MDBBtn
                  floating
                  className='m-1 google'
                  href='#!'
                  role='button'
                >
                  <MDBIcon fab icon='google' />
                </MDBBtn>
              </li>

              <li>
                <MDBBtn
                  floating
                  className='m-1 instagram'
                  href='#!'
                  role='button'
                >
                  <MDBIcon fab icon='instagram' />
                </MDBBtn>
              </li>

              <li>
                <MDBBtn
                  floating
                  className='m-1 linkedin'
                  href='#!'
                  role='button'
                >
                  <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>
              </li>

              <li>
                <MDBBtn
                  floating
                  className='m-1 github'
                  href='#!'
                  role='button'
                >
                  <MDBIcon fab icon='github' />
                </MDBBtn>
              </li>
            </ul>
          </section>
        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Copyright:
          <a
            className='text-white'
            href='https://pets-reunite.com/'
            style={{ textDecoration: 'none' }}
          >
            Pets Reunite
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
