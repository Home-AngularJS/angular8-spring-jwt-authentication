import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../model/user.model";
import { Observable } from "rxjs/index";
import { ApiResponse } from "../model/api.response";

@Injectable()
export class ApiService {

  /**
   * @House
   */
  baseUrl: string = 'http://map1.mobo.cards:8093';
  userUrl: string = 'http://map1.mobo.cards:8093/users';
  terminalUrl: string = 'http://map1.mobo.cards:8093/api/v1/terminals';
  serviceGroupsUrl: string = 'http://map1.mobo.cards:8093/api/v1/service-groups';
  transactionUrl: string = 'http://map1.mobo.cards:8093/api/v1/transactions';

  /**
   * @CTS
   */
  // baseUrl: string = 'http://192.168.1.124:9000';                                // http://localhost:8090  // http://192.168.1.71:8090
  // userUrl: string = 'http://192.168.1.71:8090/users';                           // http://localhost:8090/users
  // terminalUrl: string = 'http://192.168.1.124:9000/api/v1/terminals';           // http://map1.mobo.cards:8093/api/v1/terminals
  // serviceGroupsUrl: string = 'http://192.168.1.124:9000/api/v1/service-groups'; // http://map1.mobo.cards:8093/api/v1/service-groups
  // transactionUrl: string = 'http://192.168.1.124:9000/api/v1/transactions';     // http://map1.mobo.cards:8093/api/v1/transactions

  constructor(private http: HttpClient) { }

  /**
   * Authentication
   */
  login(loginPayload): Observable<ApiResponse> {
    // return this.http.post<ApiResponse>(this.baseUrl + '/' + 'token/generate-token', loginPayload);
    return this.http.post<ApiResponse>(this.baseUrl + '/' + 'api/v1/auth/token', loginPayload);
  }

  /**
   * User API
   */
  getUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.userUrl);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.userUrl + '/' + id);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.userUrl, user);
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.userUrl, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.userUrl + '/' + id);
  }

  /**
   * Terminal API
   */
  findAllTerminals(): Observable<any> {
    return this.http.get<any>(this.terminalUrl);
  }

  updateTerminal(anyTerminal: any): Observable<any> {
    console.log(anyTerminal);
    const terminal = anyTerminal;
    return this.http.put<any>(this.terminalUrl + '/' + terminal.terminalId, terminal);
  }

  createTerminal(anyTerminal: any): Observable<any> {
    console.log(anyTerminal);
    const terminal = anyTerminal;
    return this.http.post<any>(this.terminalUrl, terminal);
  }

  /**
   * Service-Group API
   */
  findAllServiceGroups(): Observable<any> {
    return this.http.get<any>(this.serviceGroupsUrl);
  }

  updateServiceGroup(anyTerminalGroup: any): Observable<any> {
    console.log(anyTerminalGroup);
    const terminalGroup = anyTerminalGroup;
    return this.http.put<any>(this.serviceGroupsUrl + '/' + terminalGroup.groupNumber, terminalGroup);
  }

  /**
   * Transaction API
   */
  findAllTransactions(): Observable<any> {
    return this.http.get<any>(this.transactionUrl);
  }
}