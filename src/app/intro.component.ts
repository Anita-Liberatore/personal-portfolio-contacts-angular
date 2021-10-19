import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  messageHover: boolean[] = [];

  constructor() { }

  contactsElement = [
    {
      id: '5b76d31cb67e10f2a0141cdd',
      classIcon: 'fa fa-user-circle',
      message: 'My name is Anita Liberatore',
      title: 'My name'
    },
    {
      id: '5b76d31c03f0192bec2fdcd7',
      classIcon: 'fa fa-address-card-o',
      message: 'My email is anitaliberatore@hotmail.com',
      title: 'My email'
    },
    {
      id: '5b76d31c67497da5687942fc',
      classIcon: 'fa fa-calendar',
      message: 'My birthday is 09/11/1995',
      title: 'My birthday'
    },
    {
      id: '5b76d31c1d8127ca8e856d60',
      classIcon: 'fa fa-map-marker',
      message: 'My address is Turin(TO), Italy',
      title: 'My address'
    },
    {
      id: '5b76d31c47f2ef96fc5212bf',
      classIcon: 'fa fa-phone',
      message: 'My phone number is 3272343321',
      title: 'My phone'
    },
    {
      id: '5b76d31c152fa58700b89fbb',
      classIcon: 'fa fa-lock',
      message: 'My password is camper',
      title: 'My password'
    }
  ];

  ngOnInit(): void {
  }

  showElement(index) {
    this.messageHover[index] = true;
  }

  hiddenElement(index){
    this.messageHover[index] = false;
  }
}
