import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})




export class MainComponent implements OnInit {

  cars = [
    {brand: "Tesla",
    color: "blue"
    },
    {brand: "Nissan",
    color: "green"
    },
    {brand: "Toyota",
    color: "black"}
  ];
  
addCarForm = new FormGroup({
  newCarBrand: new FormControl("", Validators.required),
  newCarColor: new FormControl("", Validators.required),
});


  
  constructor() { }

  ngOnInit(): void {
  }

  submitCar(){
    if (this.addCarForm.valid) {
      let newCar = this.addCarForm.value;
      console.log(newCar);
      this.cars.push(newCar);
    }

 
  }

}
