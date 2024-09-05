package org.letunov.todolist.app.api;

import org.letunov.todolist.domain.task.Task;

import java.time.LocalDate;
import java.util.List;

public interface TaskRepository {
    List<Task> findByDateBetween(LocalDate from, LocalDate to);
}
