import { Component, OnInit } from '@angular/core';
import { DestinationFinderDataService } from '../destination-finder-data.service';

export class RegistrationForm{
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [DestinationFinderDataService]
})

export class RegistrationComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
}
