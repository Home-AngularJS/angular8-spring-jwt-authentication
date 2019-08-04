package com.transenix.controller;

import com.transenix.model.User;
import com.transenix.model.UserDto;
import com.transenix.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class UserController {

    @Autowired
    private UserService userService;

//    @Secured({"ROLE_ADMIN", "ROLE_USER"})
//    @PreAuthorize("hasRole('ADMIN')")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    @RequestMapping(value="/users", method = RequestMethod.GET)
    public List<UserDto> listUser(){
        return userService.findAll().stream()
                .map(u -> new UserDto(u.getId(), u.getUsername(), u.getPassword(), u.getCity(), u.getAge(), u.getSalary()))
                .collect(Collectors.toList());
    }

//    @Secured("ROLE_USER")
//    @PreAuthorize("hasRole('ADMIN')")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    public UserDto getOne(@PathVariable(value = "id") Long id){
        User u = userService.findById(id);
        return new UserDto(u.getId(), u.getUsername(), u.getPassword(), u.getCity(), u.getAge(), u.getSalary());
    }

    @RequestMapping(value="/signup", method = RequestMethod.POST)
    public User saveUser(@RequestBody UserDto user){
      return userService.save(user);
  }

//    @Secured("ROLE_USER")
//    @PreAuthorize("hasRole('ADMIN')")
  @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
  @RequestMapping(value="/users", method = RequestMethod.POST)
  public UserDto addUser(@RequestBody UserDto userDto){
    System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    System.out.println(userDto);
    System.out.println("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
    User u = userService.save(userDto);
    return new UserDto(u.getId(), u.getUsername(), u.getPassword(), u.getCity(), u.getAge(), u.getSalary());
  }

//    @Secured("ROLE_USER")
//    @PreAuthorize("hasRole('ADMIN')")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    @RequestMapping(value="/users", method = RequestMethod.PUT)
    public UserDto updateUser(@RequestBody UserDto userDto){
      System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
      System.out.println(userDto);
      System.out.println("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
      User u = userService.update(userDto);
      return new UserDto(u.getId(), u.getUsername(), u.getPassword(), u.getCity(), u.getAge(), u.getSalary());
    }

//    @Secured("ROLE_USER")
    @PreAuthorize("hasRole('ADMIN')")
//    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    @RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable(value = "id") Long id){
      userService.delete(id);
    }
}
