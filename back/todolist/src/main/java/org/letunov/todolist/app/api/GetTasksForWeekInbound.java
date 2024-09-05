package org.letunov.todolist.app.api;

import org.letunov.todolist.adapter.rest.task.dto.Day;

import java.time.LocalDate;
import java.util.List;

public interface GetTasksForWeekInbound {
    List<Day> execute(LocalDate date);
}
