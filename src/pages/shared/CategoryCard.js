import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { name, image, _id } = category;
  return (
    <Link to={`/category/${_id}`}>
      <div className={`card text-white p-6 md:card-side shadow-xl bg-gray-300`}>
        <figure>
          <img className=" h-24" src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
