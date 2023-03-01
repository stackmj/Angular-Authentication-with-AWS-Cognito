import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService } from './cognito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  isAuthenticated: boolean = false;

  constructor(private router: Router, private cognitoService: CognitoService) {
  }

  public ngOnInit(): void {

  }

  public signOut(): void {
    this.cognitoService.signOut().then(() => {
      this.router.navigate(['/signIn']);
    }).catch((error) => {
      alert(error);
    })

  }

}