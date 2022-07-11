import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formData: any = {};

  formDataArray: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  saveFormDetail() {
    this.formData.id = this.formDataArray.length + 1;
    this.formDataArray.push(this.formData);
    this.formData = {};
  }

  editFormData(data: any) {
    console.log(data)
    this.formData = data;
  }
}
