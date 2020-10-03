import { Component, OnInit } from '@angular/core';
import { User} from '../../../models/user';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-admin-detail',
  templateUrl: './view-admin-detail.component.html',
  styleUrls: ['./view-admin-detail.component.css']
})
export class ViewAdminDetailComponent implements OnInit {
  user = new User();
  currentUser: User;
  currentUserSubscription: Subscription;
  //users: User[] = [];
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id)
    .subscribe(result =>{
      console.log(result);
      this.user = result;
    })
  }

}
