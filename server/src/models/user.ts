export interface User {
  name: string;
  email: string;
  descrition: string;
}

class UsersModel {
  users: User[];

  constructor() {
    this.users = [
      { name: 'RulerChen', email: 'RulerChen@mail.com', descrition: 'Author of this project' },
      { name: 'joshtu0627', email: 'joshtu0627@mail.com', descrition: 'Author of this project' },
    ];
  }

  getUsers(): User[] {
    return this.users;
  }
}

const usersModel = new UsersModel();

export default usersModel;
