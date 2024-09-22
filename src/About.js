import React from 'react';
import AboutImg from './images/image.jpg';

export default function About() {
  return (
      <div className="container text-center" style={{marginTop: '10%'}}> 
        <div className="row">
          <div className="col">
            <ul style={{paddingLeft:'10%'}}>
              <li style={{color:'white', textAlign:'left'}}>Who are we</li>
            </ul>
            <img
              src={AboutImg}
              className="img-fluid"
              style={{
                height: '20%',
                width: '80%',
                objectFit: 'cover',
                borderRadius: '50px',
              }}
              alt="About"
            />
          </div>
          <div className="col d-flex align-items-start flex-column" style={{ textAlign: 'left' }}>
            <div style={{ marginBottom: '20px' }}>
              <h5 style={{ color: 'white' }}>
                We create mind-blowing visuals, brands,
                <br /> websites and products
                <span style={{ color: 'grey' }}>
                  {' '}
                  that help startups
                  <br /> and innovative companies gain more
                  <br /> exposure.
                </span>
              </h5>
            </div>
            <div>
              <button className="btn btn-dark" style={{ background: '#4034EB' }} type="submit">
                Learn more <i className="bi bi-arrow-up-right"></i>
              </button>
            </div>
          </div>
        </div>
        </div>
  );
}
