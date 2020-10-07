import { Component, OnInit } from '@angular/core';
import { Topic } from '../../../models/topic';
import { TopicService } from '../../../services/topic.service';

@Component({
  selector: 'app-list-of-topics',
  templateUrl: './list-of-topics.component.html',
  styleUrls: ['./list-of-topics.component.css']
})
export class ListOfTopicsComponent implements OnInit {
  arrayOfTopics : Topic[];

  constructor(
    private topicService : TopicService
  ) { }

  ngOnInit(): void {
    this.topicService.getTopics()
    .subscribe(
      result =>{
      console.log(result);
      //@ts-ignore
      this.arrayOfTopics = result.result.data;
      console.log(this.arrayOfTopics);
      });
  }

}
