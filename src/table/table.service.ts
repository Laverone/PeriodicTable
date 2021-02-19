import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ITable } from './table'

@Injectable({
    providedIn: 'root'
})
export class TableService {
    private tableUrl = 'assets/table.json';

    constructor (private http: HttpClient) {}

    getTable(): Observable<ITable[]> {
        return this.http.get<ITable[]>(this.tableUrl).pipe(
            tap(data => console.log('All:' +JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}