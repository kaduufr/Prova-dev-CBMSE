// Funções para formatar o nome e o sobrenome

function formatNameContact(name, surname) {
    let nameCapitalized = name[0].toUpperCase() + name.substring(1)
    let surnameCapitalized = surname[0].toUpperCase() + surname.substring(1)
    
    // retorna o nome + sobrenome com as primeiras letras maiusculas
    return `${nameCapitalized} ${surnameCapitalized}`
}

function slugNameAndSurname(name, surname) {
    let nameLower = name[0].toLowerCase() + name.substring(1)
    let surnameLower = surname[0].toLowerCase() + surname.substring(1)

    // retorna um nome mais agradavel para as rotas ligando o nome com o sobrenome por um _
    return `${nameLower}_${surnameLower}`
}

export {
    formatNameContact,
    slugNameAndSurname
}