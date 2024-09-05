import Header from "../../components/Header"
import SwitchWeekButtons from "../../components/SwitchWeekButtons";
import Days from "../../components/day/Days";
import { Box, Container, Pagination } from "@mui/material";
import { DayType } from "../../types/Types";


const LandingView = (props: {days: Array<DayType>}) => {
    const days = props.days;

    return (
        <Box>
            <Header/>
            <SwitchWeekButtons/>
            <Days days={days}/>
        </Box>
    );
}

export default LandingView;