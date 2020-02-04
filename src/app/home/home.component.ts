import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public selectedId;

  departments = [
    {id: 1, name: 'Angular'},
    {id: 2, name: 'React'},
    {id: 3, name: 'Vue'}
  ];

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onSelect(department) {
    this.route.navigate(['/departments', department.id]);
  }
}
