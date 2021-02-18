import { Component, OnInit } from '@angular/core';
import { ITable } from 'src/table/table';
import { TableService } from 'src/table/table.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageTitle: string = 'Periodic Table';
  errorMessage: string;

    table: ITable[]= []

    constructor(private http: HttpClient){

    }

  

  ngOnInit(): void {
    this.http.get(this.table).subscribe({
      next: table => {
        this.table= table
      },
      error: err => this.errorMessage = err
    })
  }


}
