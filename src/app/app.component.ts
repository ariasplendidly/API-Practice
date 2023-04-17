import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-practice';
  users: any[] = [];

  constructor(private http: HttpClient) {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get('https://reqres.in/api/users')
      .subscribe((data: any) => {
        this.users = data.data;
      });
  }
}
