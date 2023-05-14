import React from 'react'
import TreeDynamicData from './TreeDynamicData';
import Form from './Form';
import { findNodeOriginal } from './Helpers/findNodeOriginal';

const MainApp = () => {
    const [newData, setNewData] = React.useState([]);

    function handleSubmitOriginal(event, incoming) {
        event.preventDefault();
        let { parent } = incoming;
        console.log("incoming", incoming);
    
        if (newData.length === 0) {
          setNewData((oldData) => [...oldData, incoming]);
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

    return (
        <div>
            <h1>Tree</h1>
            <Form handleSubmit={handleSubmitOriginal} />        
            <TreeDynamicData dynamicData={newData} />

        </div>
    )
}

export default MainApp