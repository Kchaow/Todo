import { Box } from '@mui/material';
import Day from "./Day";
import { DayType } from "../../types/Types";
import { convertToRu } from '../../utils/dayOfWeekUtils';

const Days = (props: {days: Array<DayType>}) => {
    const days = props.days;

    return (
        <Box
            display={'flex'}
            justifyContent={'space-around'}
            mt={'20px'}
        >
            {days.map((day: DayType) => <Day weekDay={convertToRu(day.dayOfWeek)} date={day.date} tasks={day.tasks}/>)}
            {/* <Day weekDay={'Понедельник'} date={'02.09.2024'} tasks={tasks}/>
            <Day weekDay={'Вторник'} date={'03.09.2024'} tasks={tasks}/>
            <Day weekDay={'Среда'} date={'04.09.2024'} tasks={tasks}/>
            <Day weekDay={'Четверг'} date={'05.09.2024'} tasks={tasks}/>
            <Day weekDay={'Пятница'} date={'06.09.2024'} tasks={tasks}/>
            <Day weekDay={'Суббота'} date={'07.09.2024'} tasks={tasks}/>
            <Day weekDay={'Воскресенье'} date={'08.09.2024'} tasks={tasks}/> */}
        </Box>
    );
}

export default Days;