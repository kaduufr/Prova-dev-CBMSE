import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import FormContato from '../../../components/FormContato';
import { formatNameContact, slugNameAndSurname } from '../../../helpers/HelperPerson';
import api from '../../../services/api';

const CriarContato = ({location}) => {

    const [info, setInfo] = useState({})
    const [contacts, setContacts] = useState([])

    const [typeContact, setTypeContact] = useState([])
    const history = useHistory()

    const [selectedOption, setSelectedOption] = useState('')
    const [content, setContent] = useState('')

    const actions = {
        submit: saveData,
        setSelectedOption,
        setContent
    }

    useEffect(() => {
        
        async function getInfoByContact(id) {
            await api.get('/'+ id).then(response => {
                setInfo(response.data.dataPerson)
                setContacts(response.data.dataContacts)
            })
        }

        async function getTypeContacts() {
            await api.get('types').then(response => {
                setTypeContact(response.data)
            })
        }

        getInfoByContact(location.state.person_id)
        getTypeContacts()

    }, [])

    async function searchContact() {
        let contactFiltered = contacts.filter(contact => content === contact.contact && selectedOption === contact.type_contact_id)
        return contactFiltered.length > 0 
    }

    async function saveData() {

        const res = await searchContact()

        let nameSlugged = slugNameAndSurname(info.name, info.surname)
        let fullName = formatNameContact(info.name, info.surname)

        if (res) {
            if (window.confirm('Ja existe um contato igual salvo, certeza que quer continuar?')) {
                await api.post('/' + info.id + '/contatos/adicionar', {
                    contact: content,
                    type_contact_id: selectedOption
                } ).then(response => {
                    history.push('/pessoa/' + nameSlugged, {
                        id: info.id,
                        fullName,
                        nameSlugged
                    })
                })
            } else {
                history.goBack()
            }
        } else {
            await api.post('/' + info.id + '/contatos/adicionar', {
                contact: content,
                type_contact_id: selectedOption
            } ).then(response => {
                history.push('/pessoa/' + nameSlugged, {
                    id: info.id,
                    fullName,
                    nameSlugged
                })
            })
        }

    }

    return (
        <div>
            <div className=" new-contato container ">
                <div className="header">
                    <h3 className="title">
                        Adicionar Contato
                    </h3>
                </div>

                <div className="content">
                    <h4 className="subtitle" >Informações:</h4>

                    <div className="form-data-disabled">
                        <div className="field">
                            <label className="label">Nome</label>
                            <div className="control">
                                <input className="input is-success"  value={info.name} disabled />
                            </div>
                        </div>
                        <div className="form-data-disabled">
                            <div className="field">
                                <label className="label">Sobrenome</label>
                                <div className="control">
                                    <input className="input is-success"  value={info.surname} disabled />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="line-contact" >
                        <h4 className="subtitle">
                            Contatos:
                        </h4>
                    </div>
                    {<FormContato actions={actions} typeContact={typeContact} />}
                </div>
                <div className="buttons">
                    <button onClick={e => saveData()} className="button is-info is-outlined">Adicionar</button>
                    <button onClick={e=> history.goBack()} className="button is-danger is-outlined">Cancelar</button>
                </div>

            </div>
        </div>
    )
}

export default CriarContato