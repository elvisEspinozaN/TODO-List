package com.genspark.todoapi.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id) {
        super("id could not be found : "+ id);
    }
}
