# Code Rag SDK

<p align="center">
    <img src="./code-rag.jpg" width="90%" title="hover text">

</p>

An amazing SDK connector client for APIed-Piper.

If you want to install APIed-Piper visit
<a href="https://www.npmjs.com/package/apied-piper" target="_blank">npm APIed-Piper docs</a>


<hr>

## Install

*NodeJs*

```bash
npm install code-rag-sdk
```

*WEB*

```html

<body>
... your code here

<!-- from github raw cdn  -->
<script src="https://raw.githubusercontent.com/leganux/code-rag-sdk/main/index.js"></script>

<!-- or from local  -->
<script src="path/to/code-rag/index.js"></script>
</body>
```

## Initialize and run

```javascript

let f_error = async function (e) {
    console.error('An error has been occurred', e)
}

let options = {
    engine: "axios", // defualt fetch, please usae axios if you execute from node
    f_error: f_error // default request function in case of  HTTP error
}

/** Only NodeJS */
let codeRagSdk = require('code-rag-sdk')

/** NodeJS and WEB */

let uri = 'http://localhost:3000/' //Base uri of APIed-Piper project
let base_path = 'apiv2/' //base path of APIed-Piper project

let api_rest = new codeRagSdk(uri, base_path, options)

let main = async function () {
    // the first method you must to execute is the discover
    await api_rest.discover()

}
main()
```

### Methods

*LOGIN*

This method allows you to login system and add config to localStorage if you prefer

```javascript
let password = 'Meinertzhagens-Haversack'
let user = 'Jared'
let allow_save_localstorage = false // default true .allows save token  in localstorage

let login = await api_rest.login(password, user, allow_save_localstorage);

```

*verify*

This method allows you verify login and set in local storage the user data

```javascript
let token = '0aidkjw9823ewajdw9832ebjdskndsjke93oue93.....'

let verify = await api_rest.verify(token); //will take from localstorage
```

*Register*

This method allows you to create new user

```javascript
let user = {
    user: 'erick',
    pass: 'sZon03939jjd$%',
    email: 's@mail.com'
}

let role = 'User'
let register = await api_rest.register(role, user); //will take from localstorage
```

*Forgot Password*

This method allows you to send mail for recovery password

```javascript
let email = 's@mail.com'

let forgotPassword = await api_rest.forgotPassword(user); 
```

*New Password*

This method allows you assign new password after email

```javascript
let email = 's@mail.com'
let password = 'sZon03939jjd$%'
let password2 = 'sZon03939jjd$%'
let ChangeCode = '9832ye9ndw903urwnsdlk390' // you can find this in the email you recieve

let forgotPassword = await api_rest.forgotPassword(email, password, password2, ChangeCode); 
```

*logout*

This method remove config of login

```javascript
let login = await api_rest.logout();
```

*resourceAccess*

This method returns the allowed resource access configured in APIed-Piper

```javascript
let access = await api_rest.resourceAccess()
```

*Stats*

This method returns the server info and count model from server of APIed-Piper extend config

```javascript
let access = await api_rest.stats()
```

*setResource*

This method chooses the route model app where is working with, could be single or with some of the actions of crud

```javascript
//single
api_rest.setResource('classmate')
// an then operation
let access = await api_rest.getMany()


//with operation
let access = await api_rest.setResource('classmate').getmany()
```

### Method Queries

*createOne*

This method allows you to create a new element in selected resource

* params
    * body:object = The element to save
    * query: {some options to see which fields return and populates }

```javascript
let data = await api_rest.createOne({object}, {query})
```

*createMany*

This method allows you to create a new elements in selected resource

* params
    * body:[object] = The array of elements to save
    * query: {some options to see which fields return and populates }

```javascript
let data = await api_rest.createMany([array objects], {query})
```

*getMany*

This method allows you to get elements from a resource

* params
    * query: {some options to see which fields return where and populates }

```javascript
let data = await api_rest.getMany({query})
```

*getOneWhere*

This method allows you to get one element from a resource

* params
    * query: {some options to see which fields return where and populates }

```javascript
let data = await api_rest.getOneWhere({query})
```

*getOneById*

This method allows you to get one element from a resource

* params
    * id: id of an element
    * query: {some options to see which fields return where and populates }

```javascript
let data = await api_rest.getOneById(id, {query})
```

*findUpdateOrCreate*

This method allows you to get one element and update or create if not exists

* params
    * body: element to create
    * query: {some options to see which fields return where and populates }

```javascript
let data = await api_rest.findUpdateOrCreate({object}, {query})
```

*findUpdate*

This method allows you to get one element and update but not create if not exists

* params
    * body: element to create
    * query: {some options to see which fields return where and populates }

```javascript
let data = await api_rest.findUpdate({object}, {query})
```

*updateById*

This method allows you to get one element by id and update

* params
    * id: element ide to find
    * body: fields to edit
    * query: {some options to see which fields return where and populates }

```javascript
let data = await api_rest.updateById(id, {object}, {query})
```

*findIdAndDelete*

This method allows you to delete one element by id

* params
    * id: element ide to find
    * query: {some options to see which fields return where and populates }

```javascript
let data = await api_rest.findIdAndDelete(ids, {query})
```

*datatableAJAX*

This method allows you to get the config for ajax datatable

* params
    * id: element ide to find
    * query: {some options to see which fields return where and populates }

```javascript
let data = await api_rest.datatableAJAX()
```

## Object request query URL example

**where**

```javascript
let where = {
    name: 'erick',
    age: 30
}
```

**whereObject**

```javascript
let whereObject = {
    user_id: ObjectId('60e243c82b4d320571d00639'),
}
```

**like**

```javascript
let like = {
    name: {$regex: 'eri', $options: 'i'},
}
```

**paginate**

```javascript
let paginate = {
    page: 1,
    limit: 10
}
```

**sort**

```javascript
let sort = {
    name: "DESC",
    age: "ASC"
}
```

**select**

```javascript
let select = {
    name: 1,
    age: 1,
    location: 0,
}
```

**populate**

```javascript
let populate = {
    class: 1,
    kind: 1,
    users: 0,
}
```

<hr>



<p align="center">
    <img src="https://leganux.net/web/wp-content/uploads/2020/01/circullogo.png" width="100" title="hover text">
    <br>
  Code Rag SDK is another project of  <a href="https://leganux.net">leganux.net</a> &copy; 2022 all rights reserved
    <br>
   This project is distributed under the MIT license. 

<br>
<br>
The logo and the name of Code Rag SDK is inspired by the name of Code Rag, the fictional company blog,  from the HBO series, Silicon Valley. This inspiration was taken for fun purposes only. The original name and logo reserve their rights to their original creators. 
</p>


