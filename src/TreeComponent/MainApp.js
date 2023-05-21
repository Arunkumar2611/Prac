import React, { useState } from "react";
import TreeDynamicData from "./TreeDynamicData";
import Form from "./Form";
import { findNodeOriginal } from "./Helpers/findNodeOriginal";
import { yellow } from "@mui/material/colors";

const MainApp = () => {
  const [newData, setNewData] = React.useState([
    {
      logical: "",
      fact: [{ optionVal: "", operatorVal: "", valText: "" }],
      name: "a",
      children: [],
      parent: "b",
    }
  ]);

  const [DATA, SETDATA] = useState([])

  function findByIdRecursive(array, parent, data) {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (element.parent === parent) {
        return element;
      } else {
        if (element.children) {
          const found = findByIdRecursive(element.children, parent, data);
  
          if (found) {
            return found;
          }
        }
      }
    }
  }

  const handleFormChange = (data, parent) => {
    const result = findByIdRecursive(newData, parent, data)
    // console.log("resssssssss",result);
    const list = [...newData];
      
  }

  const handleClick = (event, incoming) => {
    let { parent } = incoming;
    if (newData.length === 0) {
      setNewData((oldData) => [...oldData, incoming]);
    } else {
      let currentData = newData[0];
      if (!parent) {
        parent = currentData.name;
        incoming.parent = parent;
      }
      const newChild = findNodeOriginal(parent, incoming, currentData);
      setNewData([newChild]);
    }
  };

  const removeFunc = (name, arr) => {
    return arr
      .filter((el) => el.name !== name)
      .map((el) => {
        if (!el.children || !Array.isArray(el.children)) return el;
        el.children = removeFunc(name, el.children);
        return el;
      });
  };

  const recursiveRemove = (name) => {
    const result = removeFunc(name, newData);
    setNewData(result);
  };

  console.log("*********newData: ", newData);
  return (
    <div>
      <h1>Tree</h1>
      <TreeDynamicData
        dynamicData={newData}
        DATA={DATA}
        SETDATA={SETDATA}
        setNewData={setNewData}
        handleClick={handleClick}
        recursiveRemove={recursiveRemove}
        handleFormChange={handleFormChange}
      />
    </div>
  );
};

export default MainApp;
