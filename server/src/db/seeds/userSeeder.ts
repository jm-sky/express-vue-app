import { User } from 'src/db/entity/User.js'
import { DataSource } from 'typeorm'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class UserSeeder {
  static async seed(dataSource: DataSource) {
    console.log('Inserting a new user into the database...')

    const user = new User()
    user.firstName = 'Timber'
    user.lastName = 'Saw'
    user.email = 'john.doe@mail.com'

    await dataSource.manager.save(user)

    console.log(`Saved a new user with id: ${user.id}`)
    console.log('Loading users from the database...')
    const users = await dataSource.manager.find(User)
    console.log('Loaded users: ', users)
  }
}
