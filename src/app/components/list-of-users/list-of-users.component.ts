import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//Importing User model and User dataservice.
import { User} from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css']
})
export class UsersComponent implements OnInit {
 
   arrayofusers: User[];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) { }
 
  ngOnInit(): void {
     //Fetching the List of Requests
     this.userService.getUsers()
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

}
