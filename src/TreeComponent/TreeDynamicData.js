import React from "react";
import ListItem from "./ListItem";
import { Box, Button } from "@mui/material";

export default function TreeDynamicData(props) {
  const {
    dynamicData,
    level = 0,
    handleClick,
    recursiveRemove,
    handleFormChange,
  } = props;
  // console.log("%cinside tree", "color: red", dynamicData, "level", level);
  if (!dynamicData || !dynamicData.length) return null;

  return (
    <Box
      style={{
        backgroundColor: "gray",
        border: "1px solid",
        padding: "10px",
        margin: "10px",
      }}
    >
      {dynamicData.map((item) => (
        <div id={item.name} className="item" key={item.name}>
          <ListItem
            item={item}
            level={level}
            handleClick={handleClick}
            recursiveRemove={recursiveRemove}
            handleFormChange={handleFormChange}
          />
          <TreeDynamicData
            dynamicData={item.children}
            level={level + 1}
            handleClick={handleClick}
            recursiveRemove={recursiveRemove}
            handleFormChange={handleFormChange}
          />
        </div>
      ))}
    </Box>
  );
}
