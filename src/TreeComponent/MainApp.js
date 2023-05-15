import React from 'react'
import TreeDynamicData from './TreeDynamicData';
import Form from './Form';
import { findNodeOriginal } from './Helpers/findNodeOriginal';

const MainApp = () => {
    const [newData, setNewData] = React.useState([
      {
        "name": "arun",
        "children": [],
        "parent": "rakesh",
        "level": 1
    }
  ]); 
    const [newDataaa, setNewDataaa] = React.useState([
      {
        "name": "arun",
        "children": [],
        "parent": "rakesh",
        "level": 1
    }
    ]);

    function handleSubmitOriginal(event, incoming) {
        event.preventDefault();
        let { parent } = incoming;
        console.log("incoming", incoming);
    
        if (newData.length === 0) {
          setNewData((oldData) => [...oldData, incoming]);
          setNewDataaa((oldData) => [...oldData, incoming]);
          console.log("%cFIRST COMPONENT", "color: orange", incoming);
        } else {
          console.log("adding a child");
          let currentData = newData[0];
          if (!parent) {
            parent = currentData.name;
            incoming.parent = parent;
          }
          console.log("currentData", currentData, "parent", currentData.name);
          // we need to loop throught the current tree to find the matching parent
          // once found, we need to push the new node to the array of children of that parent node
          const newChild = findNodeOriginal(parent, incoming, currentData);
          setNewData([newChild]);
        }
      }

    
      const handleClick = (event, incoming) => {
        console.log("arun", incoming)
        let { parent } = incoming;
        console.log("incoming", incoming);
    
        if (newData.length === 0) {
          setNewData((oldData) => [...oldData, incoming]);
          setNewDataaa((oldData) => [...oldData, incoming]);
          console.log("%cFIRST COMPONENT", "color: orange", incoming);
        } else {
          console.log("adding a child");
          console.log("new", newDataaa)
          let currentData = newDataaa[0];
          if (!parent) {
            parent = currentData.name;
            incoming.parent = parent;
          }
          console.log("currentData", currentData, "parent", currentData.name);
          // we need to loop throught the current tree to find the matching parent
          // once found, we need to push the new node to the array of children of that parent node
          const newChild = findNodeOriginal(parent, incoming, currentData);
          setNewDataaa([newChild]);
          setNewData([newChild]);
          
        }
      }

      const removeFunc = (name, arr) => {
        console.log("*****************name",name, "****************Arr", arr)
        return  arr
          .filter((el) => el.name !== name)
          .map((el) => {
            if (!el.children || !Array.isArray(el.children)) return el;
            el.children = removeFunc(name, el.children);
            return el;
          });
      }

      const recursiveRemove = (name) => {
        const result = removeFunc(name, newDataaa);
        setNewDataaa(result)
      } 

console.log("newData", newData);
console.log("newDataaaa", newDataaa);
    return (
        <div>
            <h1>Tree</h1>
            <Form handleSubmit={handleSubmitOriginal} />        
            <TreeDynamicData dynamicData={newData} handleClick={handleClick} recursiveRemove={recursiveRemove} />

        </div>
    )
}

export default MainApp