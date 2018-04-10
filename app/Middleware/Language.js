'use strict'
const LanguageException = use('App/Exceptions/LanguageException')

class Language {
  async handle ({ request }, next) {
    // call next to advance the request
    const language = request.params.language
    
        switch(language){
          case 'english':
          case 'french':
          case 'german':{
            await next()
            break;
          }
          default:{
            throw new LanguageException(language, 500)
            break;
          }
        }
    
  }
}

module.exports = Language
