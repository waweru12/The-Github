import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repos } from './repos';
import { environment } from '../environments/environment';



@Injectable()
export class GithubService {
    username: string;
    private apikey :string ="2d22f1521e6a76e215b0ec1a11816c901f33e496"

    constructor(private http: HttpClient) {
        console.log('Github Service Ready...');
        this.username = 'waweru12';

    }
    getUser() {
        return this.http.get('https://api.github.com/users/' + this.username+"?access_token="+this.apikey)

    }
    getRepos() {
        return this.http.get('https://api.github.com/users/' + this.username + "/repos" + "?access_token"+this.apikey)
    }
    updateUser(username: string) {
        this.username = username;
    }
}

