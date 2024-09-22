import React from 'react';

export default function Card(props) {
  return (
    <div>
      <div className="card" style={{ width: '18rem', background: 'black' }}>
        <img src={props.pic} className="card-img-top" alt="..." />

        <div className="card-body">
          <button className="btn btn-outline-light btn-sm mb-3 me-1" type="submit">
            Development
          </button>
          <button className="btn btn-outline-light btn-sm mb-3 ms-1 me-1" type="submit">
            UI/UX
          </button>
          <button className="btn btn-outline-light btn-sm mb-3 ms-1" type="submit">
            Illustrator
          </button>
        </div>
        <h5 className="card-title" style={{ color: 'white' }}>{props.title}</h5>
      </div>
    </div>
  );
}
