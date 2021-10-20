import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  //create my variables
  messageHover: boolean[] = [];
  dataResponseFromApi: any = [];
  contactsElement: any = [];
  picture: String = '';

  constructor(private api: ApiService, private pipe: DatePipe) { }

  ngOnInit(): void {

    this.api.getData().subscribe(
      (response: any) => {
        //check the response from the server
        console.log(response); //console log to test

        //create dataResponseFromApi to populate each items of response
        this.dataResponseFromApi.push({
          name: response.results[0].name.first,
          surname: response.results[0].name.last,
          phone: response.results[0].phone,
          picture: response.results[0].picture.large,
          streetName: response.results[0].location.street.name,
          numberStreetName: response.results[0].location.street.number,
          email: response.results[0].email,
          birtday: response.results[0].dob.date,
          password: response.results[0].login.password
        });
        //check result on console log - test
        console.log(this.dataResponseFromApi[0]);

        //birtdayFormatted with pipe
        var birtdayFormatted = this.pipe.transform(this.dataResponseFromApi[0].birtday, 'shortDate');

        //picture string to mapping on frontend
        this.picture = this.dataResponseFromApi[0].picture;

        //create array to use on frontend with all of data that I need
        this.contactsElement = [
          {
            classIcon: 'fa fa-user-circle',
            message: 'My name is '.concat(this.dataResponseFromApi[0].name),
            title: 'My name'
          },
          {
            classIcon: 'fa fa-address-card-o',
            message: 'My email is '.concat(this.dataResponseFromApi[0].email),
            title: 'My email'
          },
          {
            classIcon: 'fa fa-calendar',
            message: 'My birthday is '.concat(birtdayFormatted),
            title: 'My birthday'
          },
          {
            classIcon: 'fa fa-map-marker',
            message: 'My address is '.concat(this.dataResponseFromApi[0].numberStreetName + ' ').concat(this.dataResponseFromApi[0].streetName),
            title: 'My address'
          },
          {
            classIcon: 'fa fa-phone',
            message: 'My phone number is '.concat(this.dataResponseFromApi[0].phone),
            title: 'My phone'
          },
          {
            classIcon: 'fa fa-lock',
            message: 'My password is '.concat(this.dataResponseFromApi[0].password),
            title: 'My password'
          }
        ];
      },
      () => console.log('error')
    );
  }

  showElement(index) {
    this.messageHover[index] = true;
  }

  hiddenElement(index) {
    this.messageHover[index] = false;
  }
}