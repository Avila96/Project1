import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User} from '../../../models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listOfAdmins',
  templateUrl: './listOfAdmins.component.html',
  styleUrls: ['./listOfAdmins.component.css']
})
export class AdminComponent implements OnInit {
  arrayofusers: User[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    //Fetching the List of Requests
    this.userService.getAdmin()
    .subscribe(
     result => {
        console.log(result);
        //@ts-ignore
        this.arrayofusers = result.result.data
        console.log(this.arrayofusers);
      },
      (err) =>  {alert("Unable to fetch data.\n"+
      "Please try again")}
      );
  }

  onClick(event)
  {
   

  }

}
