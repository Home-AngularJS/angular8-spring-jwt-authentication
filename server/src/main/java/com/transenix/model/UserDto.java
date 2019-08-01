package com.transenix.model;

public class UserDto {

    private long id;
    private String username;
    private String password;
    private int age;
    private long salary;

    public UserDto() {}

    public UserDto(long id, String username, String password, int age, long salary) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.age = age;
        this.salary = salary;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public long getSalary() {
        return salary;
    }

    public void setSalary(long salary) {
        this.salary = salary;
    }
}
