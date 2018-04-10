'use strict'
const User = use('App/Models/User')
class SampleApiController {
    async get_all({params, response})
    {
        var language = params.language
        const u = await User.query().with('cars', function(builder){
            builder.select([
                'a.name',
                'car.model'
            ])
            builder.joinRaw('LEFT JOIN car_names as a on a.car_id=cars.car_id and a.language=?', [language])
        }).fetch()
        response.json(u)
    }
}

module.exports = SampleApiController
