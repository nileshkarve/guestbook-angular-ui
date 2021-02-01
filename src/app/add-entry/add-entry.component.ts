import { Component, OnInit } from '@angular/core';
import { HttpclientService, BookEntry } from '../service/httpclient.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {

  entry: BookEntry = new BookEntry(0, "", Number(sessionStorage.getItem('userId')), undefined);

  constructor(
    private httpClientService: HttpclientService
  ) { }

  ngOnInit(): void {
  };

  addEntry(): void {
    this.httpClientService.addEntry(this.entry)
      .subscribe(data => {
        alert("Entry created successfully.");
      });

  };

}
