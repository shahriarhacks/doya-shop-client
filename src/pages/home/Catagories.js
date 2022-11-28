import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import CategoryCard from "../shared/CategoryCard";
import Loading from "../shared/Loading";

const Catagories = () => {
  useTitle("Categories");

  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URl}/categories`);
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="m-8">
        <div className="flex justify-between">
          <h1 className="text-green-500 font-bold text-lg"> Category</h1>
          <Link to="categories">
            <h3 className="text-green-500 font-bold text-lg">SEE ALL</h3>
          </Link>
        </div>
        <div className="grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {categories.slice(0, 3).map((ct) => (
            <CategoryCard key={ct?._id} category={ct} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Catagories;
