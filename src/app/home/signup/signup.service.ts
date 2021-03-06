import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IUserData } from "./user-data";
import { environment } from "src/environments/environment";

const API_URL = environment.apiUrl;

@Injectable()
export class SignUpService {
  constructor(private httpClient: HttpClient) {}

  checkUserNameTaken(username: string) {
    return this.httpClient.get(`${API_URL}/user/exists/${username}`);
  }

  signup(userData: IUserData) {
    return this.httpClient.post(`${API_URL}/user/signup`, userData);
  }
}
