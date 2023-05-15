export function findNodeOriginal(nodeName, childToInsert, parentNode) {
    console.log("nodeName", nodeName, "parentNode", parentNode.name);
    if (parentNode.name === nodeName) {
      parentNode.children.push(childToInsert);
    } else {
      for (let i = 0; i < parentNode.children.length; i += 1) {
        findNodeOriginal(nodeName, childToInsert, parentNode.children[i]);
      }
    }
    return parentNode;
  }
  