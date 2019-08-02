import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  // baseUrl: string = 'http://localhost:8090/users/';
  baseUrl: string = 'http://192.168.1.71:8090/users/';
  terminalUrl = 'http://map1.mobo.cards:8093/api/v1/terminals';
  serviceGroupsUrl = 'http://map1.mobo.cards:8093/api/v1/service-groups';

  login(loginPayload) : Observable<ApiResponse> {
    // return this.http.post<ApiResponse>('http://localhost:8090/' + 'token/generate-token', loginPayload);
    return this.http.post<ApiResponse>('http://192.168.1.71:8090/' + 'token/generate-token', loginPayload);
  }

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getTerminals(): Observable<any> {
    return this.http.get<any>(this.terminalUrl);
  }

  getTerminalGroups(): Observable<any> {
    return this.http.get<any>(this.serviceGroupsUrl);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, user);
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + user.id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
