import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, IconButton, Stack } from "@mui/material";
import FactSelect from "./FactSelect";
import DeleteIcon from "@mui/icons-material/Delete";

export default function HOCSubrule() {
    const [subrule, setSubRule] = useState([{ logical: "AND", fact: [ { optionVal: "", operatorVal: "", valText: "" }] }]);
    const [addFact, setAddFact] = useState([
        { optionVal: "", operatorVal: "", valText: "" }
    ]);

    const handleAddSubrule = () => {
        setSubRule([...subrule, { logical: "AND", fact: [{ optionVal: "", operatorVal: "", valText: "" }] }]);
    };

    const handleDeleteSubrule = (index) => {
        const list = [...subrule];
        const remove = list.filter((_, indexFilter) => !(indexFilter === index));
        setSubRule(remove);
    };

    const handleLogicalChange = (event, i) => {
        const { name, value } = event.target;
        let newArr = [...subrule];
        newArr[i][name] = value;
        setSubRule(newArr);
    };

    const handleAddFact = (e, i) => {
        setAddFact([...addFact, { optionVal: "", operatorVal: "", valText: "" }]);
    };

    console.log("fact:", addFact);

    return (
        <Box sx={{ backgroundColor: "#d3d6d8", p: 1 }}>
            {subrule.map((rule, i) => (
                <>
                    <Stack spacing={2} direction="row">
                        <Select
                            size="small"
                            name="logical"
                            value={rule.logical}
                            onChange={(e) => handleLogicalChange(e, i)}
                        >
                            <MenuItem value={"AND"}>AND</MenuItem>
                            <MenuItem value={"OR"}>OR</MenuItem>
                        </Select>
                        <Button variant="contained" onClick={(e) => handleAddFact(e, i)}>
                            Fact
                        </Button>
                        <Button variant="contained" onClick={handleAddSubrule}>
                            + Sub Rule
                        </Button>
                        {i !== 0 && (
                            <IconButton
                                sx={{ float: "right" }}
                                onClick={() => handleDeleteSubrule(i)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        )}
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
                </>
            ))}
        </Box>
    );
}
