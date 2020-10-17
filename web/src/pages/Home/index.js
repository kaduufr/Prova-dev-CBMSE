import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api';

const Home = ({history}) => {

    const [contacts, setContacts] = useState([])

    const location = useHistory()

    useEffect(() => {
        api.get('pessoas').then(response => {
            setContacts(response.data)
        })
    }, [])


    async function deletePerson(id) {
        if (window.confirm('Ter certeza que gostaria de excluir esse contato?')) {
            await api.delete('pessoa/' + id).then(response => {
                location.go('/')
            }, err => {
                alert('Erro ao excluir pessoa')
            })
        }
    }

    return (
        <div className="home">
            <div className="container is-max-desktop mg-16">
                <div className="header">
                    <h3 className="title">Lista de Contatos</h3>
                    <Link to="pessoa/new" className="button is-info is-outlined">+ Adicionar Pessoa</Link>
                </div>

                {/* <div className="info subtitle">
                    <p>
                        Total de Contatos: 16
                    </p>
                </div> */}

                <div className="data-table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome Completo</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map(contact => (
                                    <tr key={contact.id}>
                                        <th>{ contact.name} </th>
                                        <th className="itens-list">
                                            <Link to={"/pessoa/" + contact.id + '/contatos/criar'} className=" has-text-info">
                                                <i className="fas fa-plus"></i>
                                                Adicionar Contato
                                            </Link >
                                            <Link to={'/pessoa/'+ contact.id} className=" has-text-black">
                                                <i className="fas fa-eye"></i>
                                                Visualizar
                                            </Link >
                                            <Link to={{
                                                pathname: "/pessoa/" + contact.id + '/editar',
                                                state: {
                                                    id: contact.id,
                                                    name: contact.name,
                                                    surname: contact.surname
                                                }
                                            }} className=" has-text-primary	">
                                                <i className="fas fa-pen"></i>
                                                Editar
                                            </Link >
                                            <a onClick={e => deletePerson(contact.id)} className=" has-text-danger	">
                                                <i className="fas fa-trash-alt"></i>
                                                Deletar
                                            </a >
                                        </th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Home