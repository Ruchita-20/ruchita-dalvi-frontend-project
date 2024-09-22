import React from 'react';

export default function Card(props) {
  return (
    <div>
      <div className="card" style={{ width: 'auto', background: 'black' }}>
        {/* Container for images in a row */}
        <div className="d-flex align-items-start" style={{ padding: 0 }}>
          <img src={props.pic} className="card-img-top" alt="..." style={{ width: '33.33%', objectFit: 'cover', margin: 0, padding: 2 }} />
          <img src={props.pic} className="card-img-top" alt="..." style={{ width: '33.33%', objectFit: 'cover', margin: 0, padding: 2 }} />
          <img src={props.pic} className="card-img-top" alt="..." style={{ width: '33.33%', objectFit: 'cover', margin: 0, padding: 2 }} />
        </div>

        <div className="card-body" style={{ textAlign: 'left', paddingLeft: '10px' }}>
          <button className="btn btn-outline-light btn-sm mb-3 me-1" type="submit">
            UI/UX
          </button>
          <button className="btn btn-outline-light btn-sm mb-3 me-1" type="submit">
            Illustrator
          </button>
        </div>
        <h5 className="card-title" style={{ color: 'white', textAlign: 'left', paddingLeft: '10px' }}>{props.title}</h5>
      </div>
    </div>
  );
}
