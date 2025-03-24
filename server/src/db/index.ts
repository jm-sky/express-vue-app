/* eslint-disable @typescript-eslint/no-extraneous-class */
import { UserSeeder } from 'src/db/seeds/userSeeder.js'

import { AppDataSource } from './data-source.js'

export class DB {
  static async create() {
    try {
      await DB.#init()
      await DB.#seed()
    } catch(error) {
      console.log(error)
    }
  }

  static async #init() {
    await AppDataSource.initialize()
  }

  static async #seed() {
    await UserSeeder.seed(AppDataSource)
  }
}
