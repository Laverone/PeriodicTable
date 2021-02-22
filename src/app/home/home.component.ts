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

    table: ITable[]= [];

    selectedItems:ITable[];

    constructor(private tableService: TableService){

    }

  

  ngOnInit(): void {
    this.tableService.getTable().subscribe({
      next: table => {
        this.table= table
      },
      error: err => this.errorMessage = err
    })

    this.selectedItems = new Array<ITable>();
  }



  getPeriodic(e:any, table:ITable)
  {
    if(e.target.checked)
    {
      this.selectedItems.push(table);
    }
    else
    {
      this.selectedItems = this.selectedItems.filter(m=>m!=table);
    }

  

  }

  sendData (e:any) 
  {
    console.log(this.selectedItems);
  }


}
