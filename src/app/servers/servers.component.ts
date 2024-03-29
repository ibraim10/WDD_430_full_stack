import { Component } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: 'app-servers',
  selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test server';
  serverCreated = false;
  servers = ['Test server', 'Test server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreatedServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created, Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
