import React from 'react'
import TreeDynamicData from './TreeDynamicData';
import Form from './Form';
import { findNodeOriginal } from './Helpers/findNodeOriginal';
import { yellow } from '@mui/material/colors';

const MainApp = () => {
  const [newData, setNewData] = React.useState([
    {
      "logical": "AND",
      "name": 0,
      "children": [],
      "parent": 0,
    }
  ]);


  const handleClick = (event, incoming) => {
    console.log("%cInside handler name: ", "color: white; background:gray", incoming.name);
    console.log("%cInside handler parent: ", "color: white; background:gray", incoming.parent);
    console.log("%cInside handler logical: ", "color: white; background:gray", incoming.logical);


    // console.log("arun", incoming)
    let { parent } = incoming;
    // console.log("incoming", incoming);

    if (newData.length === 0) {
      setNewData((oldData) => [...oldData, incoming]);
      // console.log("%cFIRST COMPONENT", "color: orange", incoming);
    } else {
      console.log("adding a child");
      console.log("new", newData)
      let currentData = newData[0];
      if (!parent) {
        parent = currentData.name;
        incoming.parent = parent;
      }
      // console.log("currentData", currentData, "parent", currentData.name);
      // we need to loop throught the current tree to find the matching parent
      // once found, we need to push the new node to the array of children of that parent node
      const newChild = findNodeOriginal(parent, incoming, currentData);
      setNewData([newChild]);

    }
  }

  const removeFunc = (name, arr) => {
    return arr
      .filter((el) => el.name !== name)
      .map((el) => {
        if (!el.children || !Array.isArray(el.children)) return el;
        el.children = removeFunc(name, el.children);
        return el;
      });
  }

  const recursiveRemove = (name) => {
    const result = removeFunc(name, newData);
    setNewData(result)
  }

  console.log("newData", newData);
  return (
    <div>
      <h1>Tree</h1>
      <TreeDynamicData dynamicData={newData} handleClick={handleClick} recursiveRemove={recursiveRemove} />

    </div>
  )
}

export default MainApp