'use strict'

/*
|--------------------------------------------------------------------------
| SampleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')

class SampleSeeder {
  async run () {
    const user_id1 = await Database.insert({
      name: 'sample user 1'
    }).table('users').returning('user_id')
    const user_id2 = await Database.insert({
      name: 'sample user 2'
    }).table('users').returning('user_id')

    const car_1 = await Database.insert({
      model: 'v1'
    }).table('cars').returning('car_id')
    const car_2 = await Database.insert({
      model: 'v2'
    }).table('cars').returning('car_id')

    await Database.insert({
      car_id: car_1,
      user_id: user_id1,
    }).table('car_users')
    await Database.insert({
      car_id: car_2,
      user_id: user_id2,
    }).table('car_users')

    await Database.insert({
      car_id: car_1,
      name: 'car model 1 name-english',
      language: 'english'
    }).table('car_names')
    await Database.insert({
      car_id: car_1,
      name: 'car model 1 name-german',
      language: 'german'
    }).table('car_names')
    await Database.insert({
      car_id: car_1,
      name: 'car model 1 name-french',
      language: 'french'
    }).table('car_names')
    // ============ two different car 
    await Database.insert({
      car_id: car_2,
      name: 'car model 2 name-english',
      language: 'english'
    }).table('car_names')
    await Database.insert({
      car_id: car_2,
      name: 'car model 2 name-german',
      language: 'german'
    }).table('car_names')
    await Database.insert({
      car_id: car_2,
      name: 'car model 2 name-french',
      language: 'french'
    }).table('car_names')
  }
}

module.exports = SampleSeeder
