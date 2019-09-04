import { ValidateService } from './../../services/validate.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy  {
  username: string;
  id: string;
  private sub: any;

  constructor(private activatedRoute: ActivatedRoute, private validateService: ValidateService,
          private router: Router) { }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe(params => {
      this.verifyUsername(params.get('username'));
      this.verifyID(params.get('id'));
    });
  }

  verifyUsername(data: string) {
    if (data && this.validateService.checkUsername(data)) {
      this.username = data;
    } else {
      this.router.navigate(['noPage1']);
    }
  }
    
  verifyID(data: string) {
    if (data) {
      if (this.validateService.checkID(data)) {
        this.id = data;
      } else {
        this.router.navigate(['noPage2']);
      }
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
