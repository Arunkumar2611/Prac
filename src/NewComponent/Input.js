import React from "react";
import { Box, IconButton, MenuItem, Select, TextField } from "@mui/material";
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

export const Input = (props) => {
    const { fact, addFact, index, setAddFact } = props;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let newArr = [...addFact];
        newArr[index][name] = value;
        setAddFact(newArr);
    };

    const handleDeleteFact = (index) => {
        const list = [...addFact];
        const remove = list.filter((_, indexFilter) => !(indexFilter === index));
        setAddFact(remove);
    };
  
    return (
        <Box p={1} sx={{ m: 1, border: "1px solid grey" }}>
        <Select
            sx={{ width: "100px", mr: 1 }}
            size="small"
            label=""
            value={fact.optionVal}
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
            value={fact.operatorVal}
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
            value={fact.valText}
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
  