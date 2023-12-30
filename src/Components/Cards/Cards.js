import React from "react";
import "./Cards.css";
import { FaUsers } from "react-icons/fa";

const Cards = ({ data, isLoading, name }) => {
  return (
    <div className="card__container">
      <div className="card__container__info">
        <p>{name}</p>
        <p>{!isLoading ? data : 0}</p>
      </div>
      <div className="card__container__info">
        <FaUsers size={"50px"} />
      </div>
    </div>
  );
};

export default Cards;
