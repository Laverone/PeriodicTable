import { Component, OnInit } from '@angular/core';
import { ITable } from 'src/table/table';
import { TableService } from 'src/table/table.service';

@Component({
  selector: 'cf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageTitle: string = 'Periodic Table';
  errorMessage: string;

    periodics = [
      { name: 'Hydrogen', mass: 1.008, number: 1, symbol:'H'},
      { name: 'Helium', mass: 4.0026022, number: 2, symbol:'He'},
      { name: 'Lithium', mass: 6.94, number: 3, symbol:'Li'},
      { name: 'Beryllium', mass: 9.01218315, number: 4, symbol:'Be'},
      { name: 'Boron', mass: 10.81, number: 5, symbol:'B'},
    ]

    constructor(private tableService: TableService){

    }
  

  ngOnInit(): void {
    this.tableService.getTable().subscribe({
      next: table => {
        this.periodics= table
      },
      error: err => this.errorMessage = err
    })
  }

}
