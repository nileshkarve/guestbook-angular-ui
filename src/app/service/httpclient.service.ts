import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class BookEntry {
  constructor(
    public id: number,
    public text: string | undefined,
    public createdBy: number | undefined,
    public approvedBy: number | undefined
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getEntries() {
    return this.httpClient.get<BookEntry[]>('http://localhost:8080/bookEntry');
  }

  addEntry(entry: BookEntry) {
    return this.httpClient.post<BookEntry>('http://localhost:8080/addEntry', entry);
  }

  public deleteEntry(entry: BookEntry) {
    return this.httpClient.post<number>("http://localhost:8080/deleteEntry", entry);
  }

  public approveEntry(entry: BookEntry) {
    console.log('approving entry');
    return this.httpClient.post<number>("http://localhost:8080/approveEntry", entry);
  }
}
