import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './people-list.component.html'
})
export class PeopleListComponent implements OnInit {
  people: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/people').subscribe(data => {
      this.people = data;
    });
  }

  edit(id: number) {
    this.router.navigate(['/edit', id]);
  }

  delete(id: number) {
    this.http.delete(`http://localhost:3000/people/${id}`).subscribe(() => {
      this.people = this.people.filter(p => p.id !== id);
    });
  }
}
