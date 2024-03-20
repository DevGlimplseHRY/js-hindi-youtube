class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(email){
        this._email = email
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(password){
        this._password = password
    }
}
const hitesh = new User('h@hitesh.ai', '12abc3')
console.log(hitesh)