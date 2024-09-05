import { Box, Divider, IconButton, List, ListItemText, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import WeekDayItem from './WeekDayItem';
import DateItem from './DateItem';
import TaskItem from './TaskItem';
import { useState } from 'react';

const StyledList = styled(List)(() => ({
    borderRadius: 10,
    border: '3px solid',
    borderColor: 'rgba(0, 0, 0, 0.12)',
    width: '15rem'
}));

const Day = (props: {weekDay: String, date: String, tasks: Array<{ content: String }>}) => {
    const [tasks, setTasks] = useState(props.tasks);

    const addTask = () => {
        setTasks((otherTasks) => [
            ...otherTasks,
            {
                content: 'new Task'
            }
        ]);
    }

    const handleAdd = () => {
        addTask();
    };

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            >
            <StyledList>
                <DateItem date={props.date} />
                <Divider component="li"/>
                    <WeekDayItem weekDay={props.weekDay}/>
                <Divider component="li"/>
                {tasks.map(task =>
                    <>
                        <TaskItem isDone={false} value={task.content}/>
                        <Divider variant='middle' component="li"/>
                    </>
                    )}
            </StyledList>
            <IconButton onClick={handleAdd}>
                <AddCircleOutlineIcon/>
            </IconButton>
        </Box>
    );
}

export default Day;