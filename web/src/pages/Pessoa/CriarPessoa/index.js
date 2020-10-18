import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import FormPessoa from '../../../components/FormPessoa'
import { slugNameAndSurname, formatNameContact } from '../../../helpers/HelperPerson'
import api from '../../../services/api'

const CriarPessoa = () => {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const [contacts, setContacts] = useState([])

    const history = useHistory()

    const actions = {
        setName,
        setSurname,
        submit: createPerson
    }

    // Buscar pessoas cadastradas quando a aplicação inicia
    useEffect(() => {
        async function getAllContacts() {
            await api.get('pessoas').then(response => {
                setContacts(response.data)
            })
        }
        getAllContacts()
    }, [])

    // Verifica se ha um contato com aquele nome, se sim, retorna o id do contato para enviar o usuario para a tela do contato
    async function searchPerson() {
        const person = contacts.filter(contact => contact.name === name && contact.surname === surname)
        if (person.length > 0) {
            setId(person[0].id)
        }
        return person.length > 0
    }

    // Função para criação de pessoa
    async function createPerson(e) {
        e.preventDefault()

        let nameSlugged = slugNameAndSurname(name, surname)
        let fullName = formatNameContact(name, surname)

        const hasPerson = await searchPerson()

        if (hasPerson === true) {
            alert('Essa pessoa ja esta cadastrada')
            history.push('/pessoa/' + nameSlugged, {
                id,
                fullName,
                nameSlugged,
                name,
                surname
            })
        } else {
            await api.post('pessoa/cadastro', {
                name,
                surname
            }).then(response => {
    
                let {data: person_id} = response.data
    
                alert('Pessoa cadastrada com sucesso')
                history.push('/pessoa/' + nameSlugged , {
                    id: person_id,
                    nameSlugged,
                    fullName,
                    name,
                    surname
                })
            })
        }
       

    }

    return (
        <div className=" new-contato container ">
            <div className="header">
                <h3 className="title">
                    Adicionar Pessoa
                </h3>
            </div>
            <FormPessoa name={name} surname={surname} actions={actions} />

            <div className="buttons-person">
                <button onClick={e=> createPerson(e)} className="button is-info is-outlined">Adicionar</button>
                <button onClick={e => history.goBack()} className="button is-danger is-outlined">Cancelar</button>
            </div>
        </div>
    )
}

export default CriarPessoa