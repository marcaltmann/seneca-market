const SenecaWeb = require('seneca-web')
const Express = require('express')
const Router = Express.Router
const context = new Router()

const senecaWebConfig = {
  context: context,
  adapter: require('seneca-web-adapter-express'),
  options: { parseBody: false } // so we can use body-parser
}

let app = Express()
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  })
  .use(require('body-parser').json())
  .use(context)
  .listen(3000);

let seneca = require('seneca')()
  .use(SenecaWeb, senecaWebConfig )
  .use('api')
  .client( { type:'tcp', pin:'role:application' } )
