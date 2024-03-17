const user = {
    username : 'hitesh',
    loginCount : 8,
    signedIn : true,

    getAllDetails : function(){
        // console.log(`Got user details from database`)
        // console.log(`Username : ${this.username}`)
        // console.log(this);
    }
}
// console.log(user.username)
// console.log(user.getAllDetails())
// console.log(this)


const user2 = {
    ...user,
    username : 'ishab'
}
// console.log(user2)


function User (username, loginCount, isLoggedIn){    
        this.username = username;
        this.loginCount = loginCount;
        this.isLoggedIn = isLoggedIn;
    
        this.greeting = function (){
            console.log(`Welcome ${this.username}`)
        }
        return this
}

const userOne = new User('hitesh',3,true)
const userTwo = new User('ChaiAurCode',11,false)

console.log(userOne.constructor)
// console.log(userTwo)

/*
New Keyword :   1.) creates an empty object named as instance
                2.) constructor function is called due to new keyword       // ye argument wgaira apko pack krke de deta h
                3.) jo bhi aapne arguments vgera likhe h vo this keyword k andr inject ho jate h
                4.) you will get it
*/