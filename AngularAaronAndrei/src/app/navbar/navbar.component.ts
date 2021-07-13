import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }

donationValue: number = 0;

addDonataion() {
  this.donationValue += 10;
  console.log(this.donationValue)
}



  ngOnInit(): void {
  }

}
