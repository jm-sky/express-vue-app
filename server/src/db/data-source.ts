import 'reflect-metadata'
import { DataSource } from 'typeorm'

import { User } from './entity/User.js'

export const AppDataSource = new DataSource({
  database: 'test',
  entities: [User],
  logging: false,
  migrations: [],
  subscribers: [],
  synchronize: true,
  type: 'sqlite',
})
