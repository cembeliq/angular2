import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify({ username: username, password: password });
        return this.http.post('https://cembeliq.com:4433/api/auth/signin'
            , body, options)
            .map((response: Response) => {
                let user = response.json();
                console.log(user);
                if (user && user.accessToken) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            })
    }


    logout() {
        localStorage.removeItem('currentUser');
    }
}