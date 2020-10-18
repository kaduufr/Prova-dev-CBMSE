import React from 'react'

const FormPessoa = ({ name, surname, actions}) => {
    return (
        <form onSubmit={e =>actions.submit(e)}>
            <div className="field">
                <label className="label">Nome</label>
                <div className="control">
                    <input className="input" value={name} type="text" onChange={e => actions.setName(e.target.value)} placeholder="Ex: João" />
                </div>
            </div>
            <div className="field">
                <label className="label">Sobrenome</label>
                <div className="control">
                    <input className="input" value={surname} type="text" onChange={e => actions.setSurname(e.target.value)} placeholder="Ex: Silva do Santos" />
                </div>
            </div>
            <button type="submit" className="button-form"></button>

        </form>
    )
}

export default FormPessoa