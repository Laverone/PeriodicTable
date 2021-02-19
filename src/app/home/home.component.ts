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

    selectedItems:string[];

    constructor(private tableService: TableService){

    }

  

  ngOnInit(): void {
    this.tableService.getTable().subscribe({
      next: table => {
        this.table= table
      },
      error: err => this.errorMessage = err
    })

    this.selectedItems = new Array<string>();
  }



  getPeriodic(e:any,name:string, mass: number, number: number, symbol: string)
  {
    if(e.target.checked)
    {
      console.log(name + mass + number + symbol + 'Checked');
      this.selectedItems.push(name + mass + number + symbol);
    }
    else
    {
      console.log();

    }

    console.log(this.selectedItems)

  }


}
