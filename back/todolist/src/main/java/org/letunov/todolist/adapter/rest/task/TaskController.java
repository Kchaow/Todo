package org.letunov.todolist.adapter.rest.task;

import lombok.RequiredArgsConstructor;
import org.letunov.todolist.adapter.rest.task.dto.Day;
import org.letunov.todolist.app.api.GetTasksForWeekInbound;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@RequiredArgsConstructor
public class TaskController {
    private final GetTasksForWeekInbound getTasksForWeekInbound;

    @GetMapping("/for-week/{date}")
    public List<Day> getTasksForWeek(@PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate date) {
        return getTasksForWeekInbound.execute(date);
    }

}
