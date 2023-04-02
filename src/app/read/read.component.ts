import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {
  constructor(private service: ApiServiceService) {}

  readData: any;
  successmsg: any;

  ngOnInit(): void {
    this.getAllData();
  }

  // getDeleteId
  deleteID(id: any) {
    this.service.deleteData(id).subscribe((res) => {
      console.log(res, 'deleted data');
      this.successmsg = res.message;
      this.getAllData();
    });
  }
  
  //get all data
  getAllData() {
    this.service.getAllData().subscribe((res) => {
      console.log(res, 'res');
      this.readData = res.data;
    });
  }
}
