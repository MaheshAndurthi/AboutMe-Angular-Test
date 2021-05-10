import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MyInfo } from 'src/app/model/myInfo';


import { RepositoryService } from 'src/app/repositories/repository.service';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {

  info: MyInfo = { id: 0, firstName: '', lastName: '',email:'', designation: '', hobbies: '', interests: '', description: '' };;

  userInfoForm: FormGroup;

  constructor(private fb: FormBuilder, private repositoryService: RepositoryService) {
    this.userInfoForm = this.fb.group(
      {
        id: [''],
        firstName: [''],
        lastName: [''],
        email:[''],
        designation: [''],
        hobbies: [''],
        interests: [''],
        description: ['']
      });
  }
  ngOnInit(): void {

    this.retrieveInfo();
  }
  retrieveInfo(): void {
    this.repositoryService.getInfo()
      .subscribe(
        data => {
          this.info = data;
          this.userInfoForm.setValue(data);
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }




}
