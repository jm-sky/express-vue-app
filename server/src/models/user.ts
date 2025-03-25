export interface User {
  name: string;
  lastName: string;
  email: string;
  descrition: string;
}

class UsersModel {
  users: User[]

  constructor() {
    this.users = [
      { name: 'Nick', lastName: 'Doe', email: 'nick.doe@mail.com', descrition: 'Author of this project' },
      { name: 'Suzi', lastName: 'Doe', email: 'suzi.doe@mail.com', descrition: 'Author of this project' },
    ]
  }

  getUsers(): User[] {
    return this.users
  }
}

const usersModel = new UsersModel()

export default usersModel
