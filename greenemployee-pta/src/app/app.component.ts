import { Component, SecurityContext } from '@angular/core';
import { SingleSignOnService } from './data/single-sign-on.service';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  alerts = [];
  currentUrl = '';

  constructor(
    private singleSignOnService: SingleSignOnService,
    private sanitizer: DomSanitizer) {
  }

  login() {
    const authKey = '472BB613-FD3D-405F-AB46-4BCCFA9F246D';
    const parentCompanyID = 43277;
    const companyID = 'MFREE';
    const employeeID = 'EMP0001';
    const targetPortal = 'GreenEmployee';
    const ipAddress = '24.217.186.188';
    // tslint:disable-next-line: max-line-length
    const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36';

    this.singleSignOnService.authenticateEmployee3(authKey, parentCompanyID, companyID,
                                                   employeeID, targetPortal, ipAddress, userAgent)
        .subscribe(url => {
          console.log(url);
          this.currentUrl = this.sanitizer.sanitize(SecurityContext.URL, this.sanitizer.bypassSecurityTrustResourceUrl(url));
        });
  }
}
