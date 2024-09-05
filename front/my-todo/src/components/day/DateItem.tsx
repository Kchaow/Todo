import { ListItemText, Typography } from "@mui/material";

const DateItem = (props: {date: String}) => {
    const {date} = props;

    return (
        <ListItemText>
            <Typography 
                sx={{fontSize: '1.1rem'}}
                align='center'
                >
                {date}
            </Typography>
        </ListItemText>
    );
}

export default DateItem;