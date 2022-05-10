import React from "react";
import search from "@images/search.png";

const SearchBar = (props: any) => {
  return (
    <div className="flex items-center flex justify-center h-he3 align-">
      <div>
        <input
          className="w-wse h-he3 rounded-full bg-transparent text-center text-xs		"
          type="text"
          id="lname"
          name="lname"
        ></input>
      </div>
      <div
        className="absolute ml-hws
         float-right w-wsei h-hsei"
      >
        <img src={search} alt="search" />
      </div>
    </div>
  );
};

export default SearchBar;
