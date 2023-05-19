const insertCapability = (state, action) => {
    const { path, capability } = action.payload;
  
    if (path.length === 0) return [...state, capability];
  
    const nextId = path.shift();
    const childIdx = state.findIndex(cap => cap.id === nextId);
  
    if (childIdx < 0) return state;
  
    const nextChild = {
      ...state[childIdx],
      children: insertCapability(state[childIdx].children, action)
    }
    
    return (s => {s[childIdx] = nextChild; return s;})([...state]);
  };
  
  // test case
  
  const state = [
     {
         "id": 339,
         "children": [
             {
                 "id": 381,
                 "children": [
                     {
                         "id": 383,
                         "children": [],
                         "name": "Capability_C",
                         "level": 3,
                     }
                 ],
                 "name": "Capability_B",
                 "level": 2,
             }
         ],
         "name": "Capability_A",
         "level": 1,
     }
  ];
  
  const action = {
    type: "CREATE_CAPABILITY",
    payload: {
      path: [339, 381, 383],
      capability: {
        id: 400,
        children: [],
        name: "New Capability",
        level: 4, 
      }
    }
  }
  
  console.log(insertCapability(state, action));