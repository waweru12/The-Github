import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = [];
  repos: any = [];
  username: string;
  constructor(private githubService: GithubService) {
    this.githubService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });
    this.githubService.getRepos().subscribe(repos => {
      // console.log(user);
      this.repos = repos;
    });
  }
  ngOnInit() {
  }
  searchUser() {
    this.githubService.updateUser(this.username);
    this.githubService.getUser().subscribe(user => {
      this.user = user;
    });
    // Console.log('It works');
    this.githubService.getRepos().subscribe(repos => {
      // Console.log(user);
      this.repos = repos;
    });

  }
}
