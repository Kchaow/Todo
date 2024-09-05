package org.letunov.todolist.adapter.persistence.task;

import org.letunov.todolist.domain.task.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface TaskJpaRepository extends JpaRepository<Task, Long> {
    List<Task> findByDateBetween(LocalDate from, LocalDate to);
}
