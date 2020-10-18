import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import api from '../../../services/api'

const HomePessoa = ({location}) => {

    const [id, setId] = useState('')
    const [info, setInfo] = useState({})
    const [contacts, setContacts] = useState([])
    
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const [fullName, setFullName] = useState('')
    const [nameSlugged, setNameSlugged] = useState('')

    useEffect(() => {
        
        // salva os dados vindo da pagina anterior para carregar as informações
        setId(location.state.person_id)
        setNameSlugged(location.state.nameSlugged)
        setFullName(location.state.fullName)
        setName(location.state.name)
        setSurname(location.state.surname)

        // carrega os dados da pessoa, e os contatos salvos
        async function getInfoByContact(id) {
            await api.get('/' + id).then(response => {
                setInfo(response.data.dataPerson)
                setContacts(response.data.dataContacts)
            })
        }

        getInfoByContact(location.state.id)
    }, [])

    // funçção para deletar o contato
    async function deleteContact(contact_id) {
        if (window.confirm('Ter certeza que gostaria de excluir esse contato?')) {
            await api.delete('/' + info.id + '/contato/' + contact_id).then(response => {
                console.log('done')
                document.location.reload();
            }, err => {
                alert('Erro ao excluir pessoa')
            })
        }
    }

    return (
        <div className="home home-pessoa">
            <div className="header">
                <h3 className="title is-4"> &gt; {fullName} </h3>

                <Link to={{
                    pathname: "/contato/" + nameSlugged + '/adicionar',
                    state: {
                        person_id: info.id
                    }

                }} className="button is-info is-outlined">+ Adicionar Contato</Link>
            </div>´

            <div className="content">
                <h4 className="subtitle" >Informações:</h4>

                <div className="form-data-disabled">
                    <div className="field">
                        <label className="label">Nome</label>
                        <div className="control">
                            <input className="input is-success"  value={name ? name : info.name} disabled />
                        </div>
                    </div>
                    <div className="form-data-disabled">
                        <div className="field">
                            <label className="label">Sobrenome</label>
                            <div className="control">
                                <input className="input is-success"  value={surname ? surname : info.surname} disabled />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contacts-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Contato</th>
                            <th>Ações</th>
                        </tr>
                    </thead>´
                    <tbody>
                        {
                            contacts.map(contact => {
                                return (
                                    <tr key={contact.id}>
                                        <th>{contact.name}</th>
                                        <th>{contact.contact}</th>
                                        <th className="itens-list-contact">
                                            <Link to={{
                                                    pathname: "/contato/" + nameSlugged + '/editar',
                                                    state: {
                                                        contact,
                                                        contact_name: info.name,
                                                        contact_surname: info.surname
                                                    }
                                                }} className=" has-text-primary	">
                                                    <i className="fas fa-pen"></i>
                                                    Editar
                                                </Link >
                                                <a onClick={e=> deleteContact(contact.id)} className=" has-text-danger	">
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
    )
}

export default HomePessoa