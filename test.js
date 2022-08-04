let codeRagSdk = require('./index')

let options = {
    engine: 'axios' //default fetch
}

let api_rest = new codeRagSdk('http://localhost:3000/', 'apiv2/', options)

let main = async function () {
    // descubre el servidor de apied-piper y valida si funciona correctamente
    await api_rest.discover()
    let login = await api_rest.login('Meinertzhagens-Haversack', 'Jared')
    console.log(login)
    let access = await api_rest.resourceAccess()
    console.log(access)


}


main()
