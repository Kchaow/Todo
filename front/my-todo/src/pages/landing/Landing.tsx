import { useContext, useEffect, useState } from "react";
import LandingView from "./LandingView";
import { getAllDays } from "../../api/day";
import { DateContext } from "../../DateContext";

const Landing = () => {
    const [days, setDays] = useState([]);
    const currentDate = useContext(DateContext);

    const loadDays = () => {
        getAllDays(currentDate)
            .then(days => setDays(days));
    }

    useEffect(() => {
        loadDays();
    }, []);

    return (
        <LandingView days={days}/>
    );
}

export default Landing;