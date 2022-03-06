import React from "react";
import { Box } from "./Cards";

const MenuCard = ({ item }) => {
  return (
    <>
      {item.map((val) => {
        return (
          <>
            <div className="items-container">
              <p>{val.category}</p>
              <h1>{val.cuisine}</h1>
              <p>
                {val.description}
              </p>
              <div className="img">
                <Box link={val.image} height=" 25rem" width="30rem" />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default MenuCard;
