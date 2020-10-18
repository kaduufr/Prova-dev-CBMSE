import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { formatNameContact, slugNameAndSurname } from '../../helpers/HelperPerson';
import api from '../../services/api';
import './Pessoa.css'
import './Contato.css'

const Home = () => {

    const [contacts, setContacts] = useState([])

    const location = useHistory()

    useEffect(() => {
        // carrega todas as pessoas cadastradas
        api.get('pessoas').then(response => {
            setContacts(response.data)
        })
    }, [])

    // função para deletar uma pessoa atravez do id
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
                    <div>
                        <h3 className="title">Lista de Contatos</h3>
                        <spam>
                            <i className="subtitle">
                                Total: {contacts.length}
                            </i>
                        </spam>
                    </div>
                    <Link to="pessoa/new" className="button is-info is-outlined">+ Adicionar Pessoa</Link>
                </div>

                

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
                                contacts.map(contact => {

                                    let nameSlugged = slugNameAndSurname(contact.name, contact.surname)
                                    let nameUpper = formatNameContact(contact.name, contact.surname)

                                    return (
                                        <tr key={contact.id}>
                                            <th>{ nameUpper } </th>
                                            <th className="itens-list">
                                                <Link to={{
                                                    pathname: "/contato/" + nameSlugged + '/adicionar',
                                                    state: {
                                                        person_id: contact.id
                                                    }
                                                }} className=" has-text-info">
                                                    <i className="fas fa-plus"></i>
                                                    Adicionar Contato
                                                </Link >
                                                <Link to={{
                                                    pathname:'/pessoa/'+ nameSlugged,
                                                    state: {
                                                        id: contact.id,
                                                        fullName: nameUpper,
                                                        nameSlugged
                                                    }
                                                }} className=" has-text-black">
                                                    <i className="fas fa-eye"></i>
                                                    Visualizar
                                                </Link >
                                                <Link to={{
                                                    pathname: "/pessoa/" + nameSlugged + '/editar',
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
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Home