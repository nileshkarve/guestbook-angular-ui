import { Component, OnInit } from '@angular/core';
import { HttpclientService, BookEntry } from '../service/httpclient.service';

@Component({
  selector: 'app-bookentry',
  templateUrl: './bookentry.component.html',
  styleUrls: ['./bookentry.component.css']
})
export class BookentryComponent implements OnInit {

  entries: BookEntry[] = [];

  constructor(
    private httpclientService : HttpclientService
  ) { }

  ngOnInit(): void {
    this.httpclientService.getEntries().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  };

  deleteEntry(record: BookEntry): void {
    this.httpclientService.deleteEntry(record)
      .subscribe(data => {
        this.entries = this.entries.filter(entry => entry.id !== record.id);
      })
  };

  /*approveEntry(entryId: number): void {
    this.httpclientService.approveEntry(entryId, Number(sessionStorage.getItem('userId'))).subscribe(data => {
      console.log('data', data);
    });
  };*/

  approveEntry(entry: BookEntry): void {
    entry.approvedBy = Number(sessionStorage.getItem('userId'));
    this.httpclientService.approveEntry(entry).subscribe(data => {
      console.log('data', data);
    });
  };

  handleSuccessfulResponse(response: BookEntry[]) {
    this.entries = response;
  }

}
