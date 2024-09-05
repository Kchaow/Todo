import styled from "@emotion/styled";
import { ListItem, TextField, Checkbox } from "@mui/material";
import { useState } from "react";

const StyledTextField = styled(TextField)(() => ({
    '& .MuiOutlinedInput-root': {
        border: 'none',
        '& fieldset': {
          border: 'none',
        }
    }
}));

const TaskItem = (props: {value: String, isDone: boolean}) => {
    const [value, setValue] = useState(props.value);
    const [isDone, setDone] = useState(props.isDone);

    const handleInput = (event: any) => {
        setValue(event.target.value);
    }

    const handleCheck = (event: any) => {
        setDone(event.target.checked);
    }

    return (
        <ListItem sx={{p: '0px'}}>
            <StyledTextField 
                onChange={handleInput}
                value={value} 
                multiline 
                sx={{textDecoration: isDone ? 'line-through' : 'none'}}
            />
            <Checkbox 
                checked={isDone}
                onChange={handleCheck}
            />
        </ListItem>
    );
}

export default TaskItem;