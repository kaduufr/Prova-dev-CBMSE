import {Router} from 'express'
import ContatoController from './controllers/ContatoController'
import PeopleController from './controllers/PeopleController'

const routes = Router()

// Rotas do People Controller

routes.get('/pessoas', PeopleController.index )
routes.get('/:id', PeopleController.show )
routes.post('/pessoa/cadastro', PeopleController.create )
routes.patch('/:id/editar', PeopleController.update )
routes.delete('/pessoa/:id', PeopleController.destroy )

// Rotas do People Controller

routes.post('/:id/contatos/adicionar', ContatoController.create)
routes.patch('/:id/contato/editar/', ContatoController.update)
routes.delete('/:id/contato/:contact_id', ContatoController.destroy)

export default routes