import { dateToString } from "../utils/dateUtils";

export const getAllDays = (date: Date) =>
    fetch(`/api/tasks/for-week/${dateToString(date)}`, {
        method: 'GET'
    })
        .then(response => response.json());