import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {
  return (
    <div className='Footer'>
      <div className='foot'>
        <div class='row'>
          <div class='col-11 col-lg-6 col-md-6 col-12'>
            <div className='lpart'>
              <p className='pa'>
                @2022-2035 Fin-N-Min.com
              </p>
            </div>
          </div>
          <div class='col-11 col-lg-6 col-md-6 col-12'>
            <div className='rpart'>
              <p className='pa1'>Home</p>
              <p className='pa1'>Explore</p>
              <p className='pa1'>About Us</p>
              <p className='pa1'>Contact Us</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
export default Footer;

