package org.letunov.todolist.adapter.rest.task.dto;

import org.letunov.todolist.domain.task.Task;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.List;

public record Day (LocalDate date, DayOfWeek dayOfWeek, List<Task> tasks) {
}
