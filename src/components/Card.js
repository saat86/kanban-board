import React from "react";

export default function Card({ ticket }) {
  const maxLength = 60;
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="heading-one">
          <p>{ticket.id}</p>

          <img src="#" />
        </div>
        <div className="heading-two">
          <p>
            {ticket.title.length > maxLength
              ? `${ticket.title.slice(0, maxLength)}...`
              : ticket.title}
          </p>
        </div>
        <div className="card-display">
            <div className="card-img"><img src="https://visualpharm.com/assets/306/Ellipsis-595b40b85ba036ed117dd0d0.svg"
            /></div>
            <div className="card-tag">
                <div className="gray-dot"></div>
               <p>{ticket.tag}</p> 
            </div>
        </div>
      </div>
    </div>
  );
}
