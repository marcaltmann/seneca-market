const SenecaWeb = require('seneca-web')
const Express = require('express')
const Router = Express.Router
const context = new Router()
const path = require('path')

const senecaWebConfig = {
  context: context,
  adapter: require('seneca-web-adapter-express'),
  options: { parseBody: false } // so we can use body-parser
}

let app = Express()
  .use( require('body-parser').json() )
  .use( context )
  .get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
  })
  .listen(3000)

let seneca = require('seneca')()
  .use(SenecaWeb, senecaWebConfig )
  .use('api')
  .client( { type:'tcp', pin:'role:application' } )
