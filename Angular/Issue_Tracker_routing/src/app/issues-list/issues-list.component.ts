
import { Component, OnInit } from '@angular/core';
import { IssueService } from '../services/issue.service';
import { Issue } from '../models/Issue';
@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css']
})
export class IssuesListComponent implements OnInit {

  issues: Issue[] = [];

  constructor(private issueService: IssueService) { }

  ngOnInit() {
    this.getIssues();
  }

  getIssues() {
    this.issueService.getIssues().subscribe(
      (response: Issue[]) => { // Update the response type to Issue[]
        this.issues = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  

  deleteIssue(issue: Issue) {
    const id = issue.id; // Update to use 'id' property instead of '_id'
    if (id) {
      this.issueService.deleteIssue(id).subscribe(
        () => {
          this.getIssues();
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('Issue ID is undefined');
    }
  }
  
  
  
  
}