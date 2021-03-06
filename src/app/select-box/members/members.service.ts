import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MembersService {

  constructor(private HttpClient: HttpClient) { }

  getMembers(): Observable <any> {
    return this.HttpClient.get('http://localhost:3001/members');
  }
}
