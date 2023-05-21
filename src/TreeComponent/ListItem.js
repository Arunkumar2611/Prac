import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Select,
  MenuItem,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FactSelect from "../Component/FactSelect";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ListItem(props) {
  const { item, level, handleClick, recursiveRemove, DATA, SETDATA, dynamicData, setNewData,dIndex } = props;

  const handleAddArray = () => {
    const updatedArray = dynamicData.map((obj) => {
      if (obj.parent === item.parent) {
        return {
          ...obj,
          fact: [...obj.fact, { optionVal: "", operatorVal: "", valText: "" }]
        };
      }
      return obj;
    });
    setNewData(updatedArray);
  };

  // console.log("item", dynamicData);
  console.log("DATA", DATA);

  const handleLogicalChange = (e) => {
    const { name, value } = e.target;
    let newArr = [...dynamicData]
    console.log("ddddd",newArr, dIndex)
    newArr[dIndex][name] = value;
    setNewData(newArr);
  }

  return (
    <Box
      style={{
        backgroundColor: "pink",
        border: "1px solid",
        padding: "10px",
        margin: "10px",
      }}
    >
      <Stack spacing={2} direction="row">
        <Select
          size="small"
          name="logical"
          value={item.logical}
          onChange={handleLogicalChange}
        >
          <MenuItem value={"AND"}>AND</MenuItem>
          <MenuItem value={"OR"}>OR</MenuItem>
        </Select>
        <Button variant="contained" onClick={handleAddArray}>
          Fact
        </Button>
        <Button
          variant="contained"
          onClick={(e) =>
            handleClick(e, {
              logical: "",
              fact: [{ optionVal: "", operatorVal: "", valText: "" }],    
              name: item.parent + Math.floor(Math.random() * 100),
              children: [],
              parent: item.name || null,
            })
          }
        >
          + Sub Rule
        </Button>
        {level > 0 && (
          <IconButton
            sx={{ float: "right" }}
            onClick={() => recursiveRemove(item.name)}
          >
            <DeleteIcon />
          </IconButton>
        )}

        <Item>Name: {item.name}</Item>
        <Item>Parent: {item.parent}</Item>
        <Item>Level: {level}</Item>

      </Stack>
      <Box sx={{ mt: 2 }}>
        {item.fact.map((fact, index) => (
          <FactSelect
            fact={fact}
            item={item}
            dIndex={dIndex}
            dynamicData={dynamicData}
            setNewData={setNewData}
            index={index}
          />
        ))}
      </Box>
    </Box>
  );
}
