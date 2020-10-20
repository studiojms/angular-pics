import { Component, Input } from "@angular/core";
import { AlertService } from "./alert.service";
import { Alert, AlertType } from "./alert";

@Component({
  selector: "pic-alert",
  templateUrl: "./alert.component.html",
})
export class AlertComponent {
  @Input()
  timeout = 3000;

  alerts: Alert[] = [];

  constructor(private alertService: AlertService) {
    this.alertService.getAlert().subscribe((alert) => {
      if (!alert) {
        this.alerts = [];
      } else {
        this.alerts.push(alert);
        setTimeout(() => this.removeAlert(alert), this.timeout);
      }
    });
  }

  removeAlert(alertToRemove: Alert) {
    this.alerts = this.alerts.filter((alert) => alert != alertToRemove);
  }

  getAlertClass(alert: Alert) {
    let alertClass = "";
    switch (alert.alertType) {
      case AlertType.DANGER:
        alertClass = "alert alert-danger";
        break;
      case AlertType.INFO:
        alertClass = "alert alert-info";
        break;
      case AlertType.SUCCESS:
        alertClass = "alert alert-success";
        break;
      case AlertType.WARNING:
        alertClass = "alert alert-warning";
        break;
    }

    return alertClass;
  }
}
