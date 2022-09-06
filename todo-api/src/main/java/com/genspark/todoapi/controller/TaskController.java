package com.genspark.todoapi.controller;

import com.genspark.todoapi.model.Task;
import com.genspark.todoapi.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author elvisespinoza
 */

@RestController
public class TaskController {
    @Autowired
    private TaskRepository taskRepository;

    @PostMapping("/task")
    Task newTask(@RequestBody Task newTask) {
        return taskRepository.save(newTask);
    }
}
