const person ={
    firstName: 'Imran',
    lastName: 'Hazirovic',
}

person.fullName = function () {
    return this.firstName +' '+ this.lastName
}

console.log(person)

function User(firstName,lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

const muhammed = new User('Muhammed','Krkmisevic')

User.prototype.fullName = function () {
    return this.firstName +' '+ this.lastName
}

console.log(muhammed)

console.log(muhammed.fullName())

// 2. nacin preko funkcije

//Unutar objekta stavljamo sve metode koje zelimo dodati u
//objekte napravlje ne na ovaj nacin

const f = {
    fullName:function() {
        return this.firstName +' '+ this.lastName
    }
}

function cs(firstName,lastName){
    const newUser = Object.create(f)
    newUser.firstName = firstName
    newUser.lastName = lastName
    return newUser
}

const harun = cs('Harun','Zecirovic')
console.log(harun)
console.log(harun.fullName())

// JS moduli 

// dozvoljavaju da kod podijelimo u vise fajlova
// Za pravljenje koristimo import i export i statments

import zbir from './app2.js'
import {br} from './app2.js'

console.log(zbir(4,6))
console.log(br)



