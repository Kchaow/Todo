export type DayType = {
    date: String,
    dayOfWeek: String,
    tasks: Array<TaskType>
}

export type TaskType = {
    content: String,
    isDone: boolean
}