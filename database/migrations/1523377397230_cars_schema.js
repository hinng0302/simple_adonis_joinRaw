'use strict'

const Schema = use('Schema')

class CarsSchema extends Schema {
  up () {
    this.create('cars', (table) => {
      table.increments('car_id')
      table.string('model')
    })
  }

  down () {
    this.drop('cars')
  }
}

module.exports = CarsSchema
