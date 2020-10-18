import React from 'react';

// as actions sao todas as funções executadas, como onChanges nos inputs e o onSubmit do form
// os campos typeContactId e content podem vim vazios ou com algum dado, dependendo da ação a ser executada (criar ou editar)
const FormContato = ({typeContact , typeContactId, content, actions}) => {
    return (
        <form onSubmit={e => actions.submit(e)} >
            <div className="field is-horizontal">
                <div className="select">
                    <select value={actions.selectedOption} onChange={e => actions.setSelectedOption(e.target.value)} >
                        <option>Selecione um tipo</option>
                        {
                            typeContact.map(type => {
                                if (typeContactId === type.id) {
                                    return (
                                        <option key={type.id} value={type.id} selected>{type.name}</option>
                                    )
                                }
                                return (
                                    <option key={type.id} value={type.id}>{type.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="field">
                    <div className="control control-contact">
                        <input className="input inputs-form-contact" 
                        type="text" placeholder="..." 
                        value={content}
                        onChange={e => actions.setContent(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <button type="submit" className="button-form"></button>

        </form>
    )
}

export default FormContato