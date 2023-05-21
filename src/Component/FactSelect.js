import { Box, IconButton, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const options = ["Arun", "Rudraksh", "Lakshay", "Nikhil", "Krishna", "Yash"];
const operatorOptions = [
    ">",
    "<",
    "<=",
    ">=",
    "==",
    "!=",
    "is null",
    "is not null"
];

const FactSelect = (props) => {
    const { fact, item, index, dynamicData, setNewData, dIndex, overall } = props;
    
    const tp = (overall) => {
        console.log("ssssss", overall)
        for (let i = 0; i < overall.length; i++) {
            const element = overall[i];
            if(element.children.length === 0) {
                element.fact.operatorVal = "sssssssssssssss";
                console.log(element);
                return element
            } else {
                tp(element.children)
            }

        }
        return overall
    }


    const handleUpdate = (itemId, newName, array) => {
        return array.map(item => {
          if (item.parent === itemId) {
            // If the current item matches the itemId, create a new object with the updated name
            return { ...item, fact: {operatorVal: newName} };
          } else if (item.children && item.children.length > 0) {
            // If the current item has children, recursively call the function on the children
            return { ...item, children: handleUpdate(itemId, newName, item.children) };
          }
          return item; // If no modifications are needed, return the original item
        });
      };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let newArr = [...dynamicData]
        console.log("ddddd",newArr, dIndex, index)
        newArr[dIndex].fact[index][name] = value;
        setNewData(newArr);
    };

    const handleDeleteFact = (index) => {
        const list = [...dynamicData];
        console.log("list");
        list[dIndex].fact = list[dIndex].fact.filter(
        (_, indexfilter) => indexfilter !== index
        );
        setNewData(list);
    };

    return (
        <Box p={1} sx={{ m: 1, border: "1px solid grey" }}>
            <Select
                sx={{ width: "100px", mr: 1 }}
                size="small"
                label=""
                value={item.fact[index].optionVal}
                name={"optionVal"}
                onChange={handleInputChange}
            >
                {options.map((value) => (
                    <MenuItem key={value} value={value}>
                        {value}
                    </MenuItem>
                ))}
            </Select>
            <Select
                sx={{ width: "100px", mr: 1 }}
                size="small"
                label=""
                value={item.fact[index].operatorVal}
                name={"operatorVal"}
                onChange={handleInputChange}
            >
                {operatorOptions.map((value) => (
                    <MenuItem key={value} value={value}>
                        {value}
                    </MenuItem>
                ))}
            </Select>
            <TextField
                sx={{ width: "100px", mr: 1 }}
                size="small"
                label=""
                value={item.fact[index].valText}
                name="valText"
                variant="outlined"
                onChange={handleInputChange}
            />
            <IconButton
                sx={{ float: "right" }}
                onClick={() => handleDeleteFact(index)}
            >
                <DeleteIcon />
            </IconButton>
        </Box>
    );
};

export default FactSelect;
