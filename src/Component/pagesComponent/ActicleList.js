import React from "react";
import "./pageacticle.css";
import ListsItems from "./ListsItems";

function ActicleList({ Lists }) {
  return (
    <div className="acticle-list-container">
      <ul>
        {Lists?.map((list, index) => {
          return <ListsItems key={index} List={list.list} />;
        })}
      </ul>
    </div>
  );
}

export default ActicleList;
