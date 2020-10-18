import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import FormContato from '../../../components/FormContato';
import api from '../../../services/api';


const EditarContato = ({location}) => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const [id, setId] = useState('')
    const [content, setContent] = useState('')
    const [personID, setPersonID] = useState('')
    const [typeContactID, setTypeContactID] = useState('')

    const [typeContact, setTypeContact] = useState([])
    const history = useHistory()

    const actions = {
        submit: updateData,
        setSelectedOption: setTypeContactID,
        setContent
    }

    useEffect(() => {
        
        setName(location.state.contact_name)
        setSurname(location.state.contact_surname)

        setId(location.state.contact.id)
        setContent(location.state.contact.contact)
        setPersonID(location.state.contact.person_id)
        setTypeContactID(location.state.contact.type_contact_id)

        console.log(location.state)

        async function getTypeContacts() {
            await api.get('types').then(response => {
                setTypeContact(response.data)
            })
        }

        getTypeContacts()

    }, [])

    async function updateData() {
        await api.patch('/' + personID + '/contato/editar/' + id, {
            contact: content,
            type_contact_id: typeContactID
        }).then(response => {
            history.goBack()
        }, err=> {
            console.log(err)
            history.goBack()
        })
    }

    return (
        <div>
            <div className=" new-contato container ">
                <div className="header">
                    <h3 className="title">
                        Editar Contato
                    </h3>
                </div>

                <div className="content">
                    <h4 className="subtitle" >Informações:</h4>

                    <div className="form-data-disabled">
                        <div className="field">
                            <label className="label">Nome</label>
                            <div className="control">
                                <input className="input is-success"  value={name} disabled />
                            </div>
                        </div>
                        <div className="form-data-disabled">
                            <div className="field">
                                <label className="label">Sobrenome</label>
                                <div className="control">
                                    <input className="input is-success"  value={surname} disabled />
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
                    {<FormContato actions={actions} typeContact={typeContact} typeContactId={typeContactID} content={content} />}

                </div>

                <div className="buttons">
                    <button onClick={e => updateData()} className="button is-info is-outlined">Atualizar</button>
                    <button onClick={e=> history.goBack()} className="button is-danger is-outlined">Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default EditarContato