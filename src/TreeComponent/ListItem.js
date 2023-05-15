import React, { useState } from "react";
import { Box, Button, IconButton, Stack, Select, MenuItem, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FactSelect from "../Component/FactSelect";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ListItem(props) {
  const { item, level, handleClick, recursiveRemove } = props;
  // console.log("%cInside Listitem", "color: purple", item, level);
  const [subrule, setSubRule] = useState(item.logical);
  const [addFact, setAddFact] = useState([
    { optionVal: "", operatorVal: "", valText: "" }
  ]);

  const handleAddFact = () => {
    setAddFact([...addFact, { optionVal: "", operatorVal: "", valText: "" }]);
  };

  const handleLogicalChange = (event) => {
    setSubRule(event.target.value);
  };

  console.log("------logical : ", subrule)
  console.log("item.name : ", item.name)
  console.log("item.parent : ", item.parent)
  console.log("item.logical : ", item.logical)

  return (
    <Box
      style={{
        backgroundColor: 'pink',
        border: '1px solid',
        padding: '10px',
        margin: '10px',
      }}
    >
      <Stack spacing={2} direction="row">
        <Select
          size="small"
          name="logical"
          value={subrule}
          onChange={handleLogicalChange}
        >
          <MenuItem value={"AND"}>AND</MenuItem>
          <MenuItem value={"OR"}>OR</MenuItem>
        </Select>
        <Button variant="contained" onClick={handleAddFact}>
          Fact
        </Button>
        <Button variant="contained" onClick={(e) => handleClick(e, {
          logical: subrule,
          name: item.parent + Math.floor(Math.random() * 100),
          children: [],
          parent: item.name || null,

        })}>
          + Sub Rule
        </Button>
        {level > 0 && <IconButton
          sx={{ float: "right" }}
          onClick={() => recursiveRemove(item.name)}
        >
          <DeleteIcon />
        </IconButton>}

        <Item>Name: {item.name}</Item>
        <Item>Parent: {item.parent}</Item>
        <Item>Level: {level}</Item>

      </Stack>
      <Box sx={{ mt: 2 }}>
        {addFact.map((fact, index) => (
          <FactSelect
            fact={fact}
            addFact={addFact}
            index={index}
            setAddFact={setAddFact}
          />
        ))}
      </Box>
    </Box>
  );
}
