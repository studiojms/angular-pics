import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPhoto } from './photo';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  constructor(private http: HttpClient) {}

  listForUser(userName: string): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(`http://localhost:3000/${userName}/photos`);
  }

  listForUserPaginated(userName: string, page: number = 1): Observable<IPhoto[]> {
    const params = new HttpParams().append('page', page.toString());

    return this.http.get<IPhoto[]>(`http://localhost:3000/${userName}/photos`, { params });
  }
}
