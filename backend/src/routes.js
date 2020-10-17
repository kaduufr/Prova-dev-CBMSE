import {Router} from 'express'
import ContatoController from './controllers/ContatoController'
import PeopleController from './controllers/PeopleController'

const routes = Router()

// Rotas do People Controller

routes.get('/', PeopleController.index )
routes.get('/:name', PeopleController.show )
routes.put('/pessoa/cadastro', PeopleController.create )
routes.patch('/:name/editar', PeopleController.update )
routes.delete('/:name', PeopleController.destroy )

// Rotas do People Controller



export default routes