package com.transenix.model;

public class UserDto {

    private long id;
    private String username;
    private String password;
    private String city;
    private int age;
    private long salary;

    public UserDto() {}

    public UserDto(long id, String username, String password, String city, int age, long salary) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.city = city;
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

    public String getCity() {
      return city;
    }

    public void setCity(String city) {
      this.city = city;
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

  @Override
  public String toString() {
    return "UserDto{" +
      "id=" + id +
      ", username='" + username + '\'' +
      ", password='" + password + '\'' +
      ", city='" + city + '\'' +
      ", age=" + age +
      ", salary=" + salary +
      '}';
  }
}
