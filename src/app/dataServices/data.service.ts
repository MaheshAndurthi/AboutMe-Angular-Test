import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MyInfo } from '../model/myInfo';


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  createDb() {
    let myinfo: MyInfo =
      { id: 1, firstName: 'Mahesh', lastName: 'Andurthi', designation: 'Angular Developer', email: 'maheshandurthi06@gmail.com', hobbies: 'Watching online documentaries,Photography,Playing Badminton', interests: 'Learn New Things, Traveling  ', description: 'I am able to handle multiple tasks, I am always highly enthused about my work and tasks ahead and I understand the importance of being interactive and enjoy communicating with others for the benefit of the company' };
    return { myinfo };
  }


}