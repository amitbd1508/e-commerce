import {Component, OnInit} from '@angular/core';
import {AccountService} from './account/account.service';
import {ICurrentUser} from './shared/models/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'e-commerce';
  currentUser$: Observable<ICurrentUser>;

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  loadCurrentUser(): void {
    const token = localStorage.getItem('token');
    this.accountService.loadCurrentUser(token).subscribe(() => {
    }, error => console.log(error));
  }
}
