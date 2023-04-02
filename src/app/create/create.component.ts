import { VariableBinding } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  constructor(
    private service: ApiServiceService,
    private router: ActivatedRoute
  ) {}

  errormsg: any;
  successmsg: any;
  getParamId: any;

  ngOnInit(): void {
    // console.log(this.router.snapshot.paramMap.get('id'))
    this.getParamId = this.router.snapshot.paramMap.get('id');
    if (this.getParamId) {
      this.service.getSingleData(this.getParamId).subscribe((res) => {
        // console.log(res);
        this.userForm.patchValue({
          fullname: res.data[0].fullname,
          email: res.data[0].email,
          mobile: res.data[0].mobile,
        });
      });
    }
  }

  userForm = new FormGroup({
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
  });

  // createnewUser
  userSubmit() {
    if (this.userForm.valid) {
      this.service.createData(this.userForm.value).subscribe((res) => {
        // console.log(res);
        this.userForm.reset();
        this.successmsg = res.message;
      });
    } 
    else this.errormsg = 'All field is required';
  }
  
  // updateData

  userUpdate() {
    console.log(this.userForm.value, 'updated');

    if (this.userForm.valid) {
      this.service
        .updateData(this.userForm.value, this.getParamId)
        .subscribe((res) => {
          console.log(res);
          this.successmsg = res.message;
        });
    } else {
      this.errormsg = 'all field is required';
    }
  }
}
