package com.genspark.todoapi.controller;

import com.genspark.todoapi.model.Task;
import com.genspark.todoapi.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author elvisespinoza
 */

@RestController
@CrossOrigin("http://localhost:3000")
public class TaskController {
    @Autowired
    private TaskRepository taskRepository;

    @PostMapping("/task")
    Task newTask(@RequestBody Task newTask) {
        return taskRepository.save(newTask);
    }

    @GetMapping("/tasks")
    List<Task> getAllTasks() {
        return taskRepository.findAll();
    }
}
