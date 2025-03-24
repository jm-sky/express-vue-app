/* eslint-disable perfectionist/sort-classes */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  firstName!: string

  @Column()
  lastName!: string

  @Column()
  email!: string

  @Column()
  isAdmin!: boolean

  // constructor(data: Partial<User> = {}) {
  //   this.firstName = data.firstName
  //   this.lastName = data.lastName
  //   this.email = data.email
  //   this.isAdmin = data.isAdmin
  // }

}
