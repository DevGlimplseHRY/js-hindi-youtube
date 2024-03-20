// rarely used syntax now-a-days

const User = {
    _email :'h@hc.com',
    _password : 'ab3c',

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email)