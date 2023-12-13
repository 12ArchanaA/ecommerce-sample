import React from "react";
import "../styles/ServiceCard.css";

const ServiceCard = (props) => {
  return (
    <div className="service-card-container">
      <div className="service-card">
          <img src={props.image} alt="" />
          <div className="service-card-content">
            <h4>{props.name}</h4>
            <p>{props.para}</p>
            <a href="#" className="learn-more-link">
              <p>Learn more</p>
            </a>
          </div>
      </div>
    </div>
  );
};

export default ServiceCard;