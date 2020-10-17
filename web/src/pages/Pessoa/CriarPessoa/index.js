import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import FormPessoa from '../../../components/FormPessoa'
import api from '../../../services/api'

const CriarPessoa = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const history = useHistory()

    const actions = {
        setName,
        setSurname,
        createPerson
    }

    async function createPerson(e) {
        e.preventDefault()

        await api.post('pessoa/cadastro', {
            name,
            surname
        }).then(response => {

            let { id } = response.data.data

            setName('')
            setSurname('')

            alert('Pessoa cadastrada com sucesso')
            history.push('/pessoa/' + id )
        })
    }

    return (
        <div className=" new-contato container ">
            <div className="header">
                <h3 className="title">
                    Adicionar Pessoa
                </h3>
            </div>
            <FormPessoa name={name} surname={surname} actions={actions} />

            <div className="buttons">
                <button onClick={e=> createPerson(e)} className="button is-info is-outlined">Adicionar</button>
                <button onClick={e => history.goBack()} className="button is-danger is-outlined">Cancelar</button>
            </div>
        </div>
    )
}

export default CriarPessoa