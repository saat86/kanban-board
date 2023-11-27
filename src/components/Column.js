import React from "react";
import Card from "./Card";

export default function Column({ title, tickets }) {
  console.log(tickets.length);
  return (
    <div>
      <div className="column-display">
        <div className="column-heading-display">
         <div className="column-heading"> {title} </div>
         <div className="column-heading col-no-color"> {tickets.length} </div>
          </div>
        <div className="column-icons">
          <img
            className="cloumn-img"
            src="https://visualpharm.com/assets/306/Ellipsis-595b40b85ba036ed117dd0d0.svg"
          />
          <img
            className="cloumn-img"
            src="https://visualpharm.com/assets/814/Plus-595b40b75ba036ed117d765a.svg"
          />
        </div>
      </div>

      <div className="card-content">
        {tickets.map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}
