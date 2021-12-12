import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable(
    {providedIn:'root'}
)

export class AuthService {
    private _loginUrl = 'http://api.dailever.in/login';
    private _registerUrl = 'http://api.dailever.in/register';

    constructor(
        private http: HttpClient
        ) {}

    loginUser (user: any) {
        return this.http.post<any>( this._loginUrl, user);
    }

    registerUser (user: any) {
        return this.http.post<any>(this._registerUrl, user);
    }

    getToken () {
        return localStorage.getItem('token');
    }
}