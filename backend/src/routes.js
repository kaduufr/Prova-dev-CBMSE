import {Router} from 'express'
import ContactController from './controllers/ContactController'
import PeopleController from './controllers/PeopleController'
import TypeContactController from './controllers/TypeContactController'

const routes = Router()

// Rotas do TypeContact Controller

routes.get('/types', TypeContactController.index)

// Rotas do People Controller

routes.get('/pessoas', PeopleController.index )
routes.get('/:id', PeopleController.show )
routes.post('/pessoa/cadastro', PeopleController.create )
routes.patch('/:id/editar', PeopleController.update )
routes.delete('/pessoa/:id', PeopleController.destroy )

// Rotas do Contact Controller

routes.post('/:id/contatos/adicionar', ContactController.create)
routes.patch('/:id/contato/editar/:contact_id', ContactController.update)
routes.delete('/:id/contato/:contact_id', ContactController.destroy)



export default routes