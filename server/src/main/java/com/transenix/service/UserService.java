package com.transenix.service;

import com.transenix.model.User;
import com.transenix.model.UserDto;
import java.util.List;

public interface UserService {
  User save(UserDto user);
  User update(UserDto user);
  List<User> findAll();
  void delete(long id);
  User findOne(String username);
  User findById(Long id);
}
