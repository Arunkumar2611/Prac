import React, { useState } from "react";
import { Input } from "./Input";
import { Box, Select, MenuItem, Stack, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


export const Module = ({ obj, setObj }) => {
    const [component, setComponent] = useState([]);
    const [addFact, setAddFact] = useState([
        { optionVal: "", operatorVal: "", valText: "" }
    ]);

    const [subrule, setSubRule] = useState([{ logical: "AND" }]);


    const handleAddFact = (e) => {
        setAddFact([...addFact, { optionVal: "", operatorVal: "", valText: "" }]);
    };

    const handleClick = () => {
        setObj([...obj, addFact]);
        setComponent([...component, <Module obj={obj} setObj={setObj} />]);
    };

    const handleLogicalChange = (event, i) => {
        const { name, value } = event.target;
        let newArr = [...subrule];
        newArr[name] = value;
        setSubRule(newArr);
    };

    const handleDeleteSubrule = (index) => {
        console.log("component", component);
        setComponent([]);
        // const list = [...subrule];
        // console.log("LIS", list)
        // const remove = list.filter((_, indexFilter) => !(indexFilter === index));
        // setSubRule(remove);
    };

    console.log("compome", component)
    // console.log("Input Field", inputFields)
    // console.log("Object nested", obj);

    return (
        <div
            style={{
                backgroundColor: "pink",
                border: "1px solid",
                padding: "10px",
                margin: "10px"
            }}
        >
            <Stack spacing={2} direction="row">
                <Select
                    size="small"
                    name="logical"
                    value={subrule.logical}
                    onChange={(e) => handleLogicalChange(e)}
                >
                    <MenuItem value={"AND"}>AND</MenuItem>
                    <MenuItem value={"OR"}>OR</MenuItem>
                </Select>
                <Button variant="contained" onClick={(e) => handleAddFact(e)}>
                    Fact
                </Button>
                <Button variant="contained" onClick={handleClick}>
                    + Sub Rule
                </Button>
                <IconButton
                    sx={{ float: "right" }}
                    onClick={() => handleDeleteSubrule()}
                >
                    <DeleteIcon />
                </IconButton>
            </Stack>
                {component.map((item, index) => (
                    <Box key={index}>{item}</Box>
                ))}

            <Box sx={{ mt: 2 }}>
                {addFact.map((fact, index) => (
                    <Input
                        fact={fact}
                        addFact={addFact}
                        index={index}
                        setAddFact={setAddFact}
                    />
                ))}
            </Box>
        </div>
    );
};
