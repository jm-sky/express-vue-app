import sqlite3 from 'sqlite3'

const db = new sqlite3.Database(':memory:')


db.exec(`
    CREATE TABLE users (
        id INTEGER,
        name str
        password
        created
    )
`)
