import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //snapshot to use it without next and previous anchor
    /* let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id; */

    //paramMap to use it with next and previous anchor
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious() {
    const previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    const nextId: any = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  goBack() {
    const selectedId = this.departmentId;
    this.router.navigate(['/home']);
  }

  goProducts() {
    this.router.navigate(['products'], {relativeTo: this.route});
  }

  goServices() {
    this.router.navigate(['services'], {relativeTo: this.route});
  }

}
