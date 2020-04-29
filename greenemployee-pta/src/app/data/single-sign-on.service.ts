import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SingleSignOnService {
  constructor(private http: HttpClient) { }

  authenticateEmployee3(authKey: string, parentCompanyID: number, companyID: string,
                        employeeID: string, targetPortal: string, ipAddress: string, userAgent: string): Observable<string> {
    const route = 'http://www.greenshades.com/singlesignonservice/AuthenticateEmployee3';
    const params = {
        AuthenticationKey: authKey,
        GSCompanyID: parentCompanyID,
        OurCompanyID: companyID,
        EmployeeID: employeeID,
        TargetPortal: targetPortal,
        IPAddress: ipAddress,
        UserAgent: userAgent
    };

    return this.http.put<string>(`${route}`, JSON.stringify(params));
  }
}
