import { Component } from '@angular/core';

@Component({
  selector: '.app-warning-alert',
  templateUrl: './warningAlert.component.html',
  styleUrls: ['./warningAlert.component.css'],
})
export class WarningAlertComponent {
  userName = '';
  showSecret = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
