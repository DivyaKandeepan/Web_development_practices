import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IssueService } from '../services/issue.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  message = '';

  constructor(private formBuilder: FormBuilder, private issueService: IssueService) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.message = 'Title and Description should not be empty!!! Please verify details';
      return;
    }

    this.issueService.addIssue(this.form.value).subscribe(
      () => {
        this.message = 'Issue added';
        this.clearForm();
      },
      (error) => {
        console.log(error);
        this.message = 'Failed to add Issue!!';
      }
    );
  }

  clearForm() {
    this.form.reset();
  }
}
