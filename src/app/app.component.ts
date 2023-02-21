import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Page One', url: '/page-one', icon: 'chatbox' },
    { title: 'Page Two', url: '/page-two', icon: 'chatbox' },
    { title: 'Page Three', url: '/page-three', icon: 'chatbox' },
    { title: 'Page Four', url: '/page-four', icon: 'chatbox' },
  ];

  constructor() {}
}
