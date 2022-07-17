import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  results: any;
  formGroup = new FormGroup({
    profile: new FormControl()
  });

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.githubService.getProfile(this.formGroup.value.profile).subscribe(
      results => {
        this.results = JSON.stringify(results);
      },
      err => {
        this.results = JSON.stringify(err);
      }
    );
  }
}
