import {Component} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-interview-prep';
  count = 0
  public jsonData: any;
  public jsonDataAll: any;
  public getJsonURL='https://randomuser.me/api'

  counter(id: any) {
    console.log(id)
    id == 1 ? this.count++ : this.count--;

  }

  constructor(public http: HttpClient) {
    this.getJsonData()
  }


  getJsonData() {
    this.getData().pipe(map((data) => {
        this.jsonData = data.results
         data.results.forEach((test:any)=>{
           this.jsonDataAll =test
           JSON.stringify(this.jsonDataAll)
         })
        console.log(this.jsonData)
        console.log(this.jsonDataAll)
      }
    )).subscribe()

  }


  getData():Observable<any>{
    return this.http.get(this.getJsonURL)

  }

}
