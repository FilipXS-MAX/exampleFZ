import { Injectable } from '@angular/core';
import { user } from '../components/listing-smart/interface-users';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {

  public allUsers: user[] = [];

  constructor() { }
  
  
  getUsers() {
    return this.allUsers;
  }

  setUsers(users: user[]) {
    this.allUsers = users;
  }

  getUserById(id: number): user | undefined {
    return this.allUsers.find(el => el.id == id);
  }
}
