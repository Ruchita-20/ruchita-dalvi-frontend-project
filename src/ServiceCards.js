import React from "react";

export default function ServiceCards() {
  return (
    <div>
      <div 
        className="card ms-1 me-1 mt-5"
        style={{ position: 'relative', background:'#151515',transition: 'background-color 0.3s' }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4034EB'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#151515'}
      >
        <div className="card-body">
          <i
            className="bi bi-arrow-up-right-circle"
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              fontSize: '1.2rem',
              color:'white'
            }}
          ></i>
          <h5 className="card-title" style={{ textAlign: 'left',color:'white' }}>Brand Identity</h5><br/>
          <p className="card-text" style={{ textAlign: 'left', color:'#BBBBBB' }}>
            We provide digital solutions as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase the company’s values
          </p>
        </div>
      </div>
    </div>
  );
}
