import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { IServerLog } from "./server-log";
import { environment } from "src/environments/environment";

const API_URL = environment.logApiUrl;

@Injectable({ providedIn: "root" })
export class ServerLogService {
  constructor(private http: HttpClient) {}

  log(log: IServerLog) {
    return this.http.post(`${API_URL}/infra/log`, log);
  }
}
