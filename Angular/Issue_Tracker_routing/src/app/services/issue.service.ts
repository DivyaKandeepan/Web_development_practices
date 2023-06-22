import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Issue} from '../models/Issue'

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  constructor(private http: HttpClient) { }

  // Implement addIssue method using HttpClient for saving an Issue details
  addIssue(issue: Issue): Observable<any>{
    return this.http.post('http://localhost:3000/issues', issue);
  }

  // Implement getIssues method using HttpClient for fetching issues
  getIssues(): Observable<any> {
    return this.http.get('http://localhost:3000/issues');
  }

  // Implement deleteIssue method using HttpClient to delete an issue by id
deleteIssue(issueId: string): Observable<any> {
  const url = `http://localhost:3000/issues/${issueId}`;
  return this.http.delete(url);
}
  
}
