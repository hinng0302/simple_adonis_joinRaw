'use strict'

const Schema = use('Schema')

class CarNameSchema extends Schema {
  up () {
    this.create('car_names', (table) => {
      table.increments('car_name_id')
      table.string('car_id')
      table.string('name')
      table.enum('language', ['english', 'german', 'french'])
    })
  }

  down () {
    this.drop('car_names')
  }
}

module.exports = CarNameSchema
