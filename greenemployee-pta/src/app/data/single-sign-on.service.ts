import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SingleSignOnService {
  constructor(private http: HttpClient) { }

  authenticateEmployee3(authKey: string, parentCompanyID: number, companyID: string,
                        employeeID: string, targetPortal: string, ipAddress: string, userAgent: string): Observable<string> {
    const route = 'https://www.greenshadesonline.com/webservices/singlesignonservice/signonservice.asmx/';
    const params = {
        AuthenticationKey: authKey,
        GSCompanyID: parentCompanyID,
        OurCompanyID: companyID,
        EmployeeID: employeeID,
        TargetPortal: targetPortal,
        IPAddress: ipAddress,
        UserAgent: userAgent
    };

    return this.http.put<string>(`${route}AuthenticateEmployee3`, JSON.stringify(params));
  }
}
