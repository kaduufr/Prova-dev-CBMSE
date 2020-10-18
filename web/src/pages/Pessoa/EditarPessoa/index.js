import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import FormPessoa from '../../../components/FormPessoa'
import api from '../../../services/api'

const EditarPessoa = ({location}) => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [id, setId] = useState('')

    const history = useHistory()

    const actions = {
        setName,
        setSurname,
        submit: editPerson
    }

    useEffect(() => {

        setName(location.state.name)
        setSurname(location.state.surname)
        setId(location.state.id)
    }, [])

    // funçção para editar a pessoa
    async function editPerson(e) {
        e.preventDefault()

        await api.patch('/'+ id + '/editar', {
            name,
            surname
        }).then(response => {
            history.go('/')
        }, err => {
            alert('Error ao salvar dados')
            history.goBack()
        })
    }

    return (
        <div className=" new-contato container ">
            <div className="header">
                <h3 className="title">
                    Editar Pessoa
                </h3>
            </div>
            <FormPessoa name={name} surname={surname} actions={actions}  />

            <div className="buttons">
                <button onClick={e => editPerson(e)} className="button is-info is-outlined">Salvar</button>
                <button onClick={e=> history.goBack()} className="button is-danger is-outlined">Cancelar</button>
            </div>
        </div>
    )
}

export default EditarPessoa