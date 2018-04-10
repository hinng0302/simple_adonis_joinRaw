'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class LanguageException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  // handle () {}

  handle (error, { response }) {
    response.status(500).json(
      {
        header: new Date,
        body:'Invalid language'
      }
    )
  }
  
}

module.exports = LanguageException
