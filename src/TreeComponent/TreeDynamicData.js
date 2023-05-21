import React from "react";
import ListItem from "./ListItem";
import { Box, Button } from "@mui/material";

export default function TreeDynamicData(props) {
  const {
    dynamicData,
    setNewData,
    level = 0,
    DATA, SETDATA,
    handleClick,
    recursiveRemove,
    handleFormChange,
    dIndex,
    ORIGINALDATA
  } = props;
  if (!dynamicData || !dynamicData.length) return null;

  console.log("dynamic data inside TreeDynamicData", dynamicData)

  return (
    <Box
      style={{
        backgroundColor: "gray",
        border: "1px solid",
        padding: "10px",
        margin: "10px",
      }}
    >
      {dynamicData.map((item, dIndex) => (
        <div id={item.name} className="item" key={item.name}>
          <ListItem
            item={item}
            dIndex={dIndex}
            ORIGINALDATA={ORIGINALDATA}
            dynamicData={dynamicData}
            level={level}
            DATA={DATA}
            SETDATA={SETDATA}
            setNewData={setNewData}
            handleClick={handleClick}
            recursiveRemove={recursiveRemove}
            handleFormChange={handleFormChange}
          />
          <TreeDynamicData
            dynamicData={item.children}
            ORIGINALDATA={ORIGINALDATA}
            dIndex={dIndex}
            DATA={DATA}
            SETDATA={SETDATA}
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
