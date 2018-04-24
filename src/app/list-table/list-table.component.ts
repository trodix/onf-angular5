import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent implements OnInit {

  arbres: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.arbres.push(this.apiGetData());
    //console.log(this.apiGetData());
  }

  apiGetData() {
    return this.dataService.fetchData().subscribe(res => this.arbres = res);
  }

}
