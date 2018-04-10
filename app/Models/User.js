'use strict'

const Model = use('Model')

class User extends Model {
  static get table(){
    return 'users'
  }
  
  cars()
  {
    return this.belongsToMany(
      'App/Models/Car',
      'user_id',
      'car_id',
      'user_id',
      'car_id'
    ).pivotModel('App/Models/CarUser')
  }
}

module.exports = User
