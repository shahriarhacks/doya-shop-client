import axios from "axios";
import React, { useState } from "react";
import CategoryCard from "../shared/CategoryCard";

const Category = () => {
  const [categories, setCategories] = useState([]);
  axios
    .get(`${process.env.REACT_APP_API_URl}/categories`)
    .then((res) => {
      setCategories(res.data);
    })
    .catch((err) => console.log(err));
  return (
    <div className="my-12">
      <div className="grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((ct) => (
          <CategoryCard key={ct?._id} category={ct} />
        ))}
      </div>
    </div>
  );
};

export default Category;
