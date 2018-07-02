import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app bisa!';
  private apiUrl = 'http://localhost:8081/api/user';
  data: any = {};

  constructor(private http: Http){
    console.log('Helo');
    this.getListUser();
    this.getData();
  }

  getData(){
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }

  getListUser(){
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }
}
