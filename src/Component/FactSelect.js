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
    const {ORIGINALDATA, fact, item, index, dynamicData, setNewData, dIndex, overall } = props;

    function deepComparison(first, second) {
      /* Checking if the types and values of the two arguments are the same. */
      if (first === second) return true;

      /* Checking if any arguments are null */
      if (first === null || second === null) return false;

      /* Checking if any argument is none object */
      if (typeof first !== "object" || typeof second !== "object") return false;

      /* Using Object.getOwnPropertyNames() method to return the list of the objects’ properties */
      let first_keys = Object.getOwnPropertyNames(first);

      let second_keys = Object.getOwnPropertyNames(second);

      /* Checking if the objects' length are same*/
      if (first_keys.length !== second_keys.length) return false;

      /* Iterating through all the properties of the first object with the for of method*/
      for (let key of first_keys) {
        /* Making sure that every property in the first object also exists in second object. */
        if (!Object.hasOwn(second, key)) return false;

        /* Using the deepComparison function recursively (calling itself) and passing the values of each property into it to check if they are equal. */
        if (deepComparison(first[key], second[key]) === false) return false;
      }
      return true;
    }


    const tp = (overall, name, value) => {
        // console.log("ssssss", overall)
        for (let i = 0; i < overall.length; i++) {
            const element = overall[i];
            if(element.parent === item.parent) {
                element.fact[index][name] = value;
                console.log(element);
                return element
            } else {
                tp(element.children, name, value)
            }

        }
        return overall
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let newArr = [...dynamicData]
        console.log("ddddd",newArr, dIndex, index)
        newArr[dIndex].fact[index][name] = value;
        console.log("NEW ARRAY---", newArr)
        const arr = [...ORIGINALDATA]
        const kp = tp(arr, name, value)
        console.log(deepComparison(arr, kp),"tp-- VLALUE------", kp)
        console.log("EQUAL---", deepComparison(newArr, arr))
        setNewData(arr);
    };

    const handleDeleteFact = (index) => {
        const list = [...dynamicData];
        console.log("list");
        list[dIndex].fact = list[dIndex].fact.filter(
        (_, indexfilter) => indexfilter !== index
        );
        setNewData(list);
    };

    console.log("ORIGINAL---", ORIGINALDATA);

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
