package org.letunov.todolist.adapter.persistence.task;

import lombok.RequiredArgsConstructor;
import org.letunov.todolist.app.api.TaskRepository;
import org.letunov.todolist.domain.task.Task;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class TaskRepositoryAdapter implements TaskRepository {
    private final TaskJpaRepository taskJpaRepository;


    @Override
    public List<Task> findByDateBetween(LocalDate from, LocalDate to) {
        return taskJpaRepository.findByDateBetween(from, to);
    }
}
