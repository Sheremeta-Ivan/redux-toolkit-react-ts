import React from "react";
import { useAppSelector } from "../hooks/redux";

const FavoritesPage = () => {
  const { favourites } = useAppSelector((state) => state.github);
  if (favourites.length === 0) {
    return <p>No favourites yet</p>;
  }
  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none ">
        {favourites.map((f) => (
          <li key={f}>
            <a href={f} target="_blank" rel="noreferrer">
              {f}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
