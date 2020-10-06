import { Component, OnInit } from '@angular/core';
import { User} from '../../../models/user';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user-detail',
  templateUrl: './view-user-detail.component.html',
  styleUrls: ['./view-user-detail.component.css']
})
export class ViewUserDetailComponent implements OnInit {

  user = new User();


  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id)
    .subscribe(result =>{
      console.log(result);
      //@ts-ignore
      this.user = result.result.data;
    })
  }
}
