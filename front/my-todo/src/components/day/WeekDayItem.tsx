import { ListItemText, Typography } from '@mui/material';

const WeekDayItem = (props: {weekDay: String }) => {
    const {weekDay} = props;

    return (
        <ListItemText>
            <Typography
                align='center'
                >
                {weekDay}
            </Typography>
        </ListItemText>
    );
}

export default WeekDayItem;