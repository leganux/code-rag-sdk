let codeRagSdk = function (host_uri = 'http://localhost:3000/', api_base = "api/", options = {}) {
    this.host_uri = host_uri
    this.api_base = api_base
    this.options = options
    this.furi = host_uri + api_base
    this.token = 'Bearer NONE'
    this.acl = 'OPEN'
    this.routes = {}
    this.hasBeenDiscovered = false
    this.front = options.isFront
    this.fetchHeaders = {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": ''
        }
    }

    let discover = async function () {
        let el = this

    }
    let login = async function (password = '', user = '', saveInLocalStorage = false) {
        let el = this
        let method = 'POST'
    }

    let logout = async function (removeFromLocalStorage = false) {
        let el = this
    }

    let resourceAccess = async function (mine = false) {
        let el = this


    }
    let createOne = async function (query = {}) {
        let el = this
        let method = 'POST'
    }
    let createMany = async function (query = []) {
        let el = this
        let method = 'POST'
    }
    let getMany = async function (query = {}) {
        let el = this
        let method = 'GET'
    }
    let getOneWhere = async function (query = {}) {
        let el = this
        let method = 'GET'
    }
    let getOneById = async function (id = '', query = {}) {
        let el = this
        let method = 'GET'
    }
    let findUpdateOrCreate = async function (query = {}) {
        let el = this
        let method = 'PUT'
    }
    let findUpdate = async function (query = {}) {
        let el = this
        let method = 'PUT'
    }
    let updateById = async function (id = '', query = {}) {
        let el = this
        let method = 'PUT'

    }
    let findIdAndDelete = async function (id = '', query = {}) {
        let el = this
        let method = 'PUT'

    }
    let datatable = async function () {
        let el = this
        let method = 'DELETE'

    }
}


module.exports = codeRagSdk
