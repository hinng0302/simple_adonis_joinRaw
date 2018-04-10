'use strict'

const Schema = use('Schema')

class CarUserSchema extends Schema {
  up () {
    this.create('car_users', (table) => {
      table.increments('car_user_id')
      table.integer('user_id')
      table.integer('car_id')
    })
  }

  down () {
    this.drop('car_users')
  }
}

module.exports = CarUserSchema
