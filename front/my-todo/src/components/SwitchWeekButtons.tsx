import {Box, IconButton} from "@mui/material"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const SwitchWeekButtons = () => {

    const nextWeekHandle = () => {

    }

    const beforeWeekHandle = () => {

    }

    return (
        <Box 
            display='flex'
            width={'100%'}
            justifyContent='space-around'
            mt='20px'
        >
            <IconButton onClick={beforeWeekHandle}>
                <NavigateBeforeIcon/>
            </IconButton>
            <IconButton onClick={nextWeekHandle}>
                <NavigateNextIcon/>
            </IconButton>
        </Box>
    );
}

export default SwitchWeekButtons;