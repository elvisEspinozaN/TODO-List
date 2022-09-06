package com.genspark.todoapi.repository;

import com.genspark.todoapi.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author elvisespinoza
 */

public interface TaskRepository extends JpaRepository<Task, Long> {
}
