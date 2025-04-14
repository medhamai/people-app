import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-person-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './person-edit.component.html'
})
export class PersonEditComponent implements OnInit {
  person = { name: '', age: 0 };
  id: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`http://localhost:3000/people/${this.id}`).subscribe(data => {
      this.person = data;
    });
  }

  save() {
    this.http.put(`http://localhost:3000/people/${this.id}`, this.person).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
