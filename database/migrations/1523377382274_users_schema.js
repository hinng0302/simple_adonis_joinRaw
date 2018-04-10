'use strict'

const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments('user_id')
      table.string('name')
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsersSchema
