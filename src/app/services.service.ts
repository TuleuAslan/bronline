import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogIn, LogInResponse, SignUp, SignUpResponse } from './general.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class ServicesService {
    constructor(private http: HttpClient) { }
    signUp(clubInfo: SignUp): Observable<SignUpResponse> {
        return this.http.post<SignUpResponse>('/rest/auth/admin/sign-up', clubInfo);
    }
    login(credentials: LogIn ) : Observable<LogInResponse>{
        return this.http.post<LogInResponse>('/rest/auth/log-in', credentials);
    }
    updateInfo(id: string, changes: any): Observable<any>{
        return this.http.post<any>(`/rest/admin/update/${id}`, changes);
    }
}
