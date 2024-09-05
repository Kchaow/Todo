package org.letunov.todolist.app.impl;

import lombok.RequiredArgsConstructor;
import org.letunov.todolist.adapter.rest.task.dto.Day;
import org.letunov.todolist.app.api.GetTasksForWeekInbound;
import org.letunov.todolist.app.api.TaskRepository;
import org.letunov.todolist.domain.task.Task;
import org.springframework.stereotype.Component;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static java.time.temporal.TemporalAdjusters.nextOrSame;
import static java.time.temporal.TemporalAdjusters.previousOrSame;

@Component
@RequiredArgsConstructor
public class GetTaskFoWeekUseCase implements GetTasksForWeekInbound {
    private final TaskRepository taskRepository;

    @Override
    public List<Day> execute(LocalDate date) {
        LocalDate fromDate = date.with(previousOrSame(DayOfWeek.MONDAY));
        LocalDate toDate = date.with(nextOrSame(DayOfWeek.SUNDAY));
        List<Task> tasks = taskRepository.findByDateBetween(fromDate, toDate);
        List<Day> days = new ArrayList<>();
        for (DayOfWeek dayOfWeek : DayOfWeek.values()) {
            LocalDate dateOfDayOfWeek = fromDate.with(nextOrSame(dayOfWeek));
            List<Task> tasksForDayOfWeek = tasks.stream().filter((x) -> x.getDate().equals(dateOfDayOfWeek)).toList();
            days.add(new Day(dateOfDayOfWeek, dayOfWeek, tasksForDayOfWeek));
        }
        return days;
    }
}
