// jsx -> tsx
// js -> ts

let idade = 24;
let nome = "Gabriel";
let isAuthorizad = true;
idade = 35;

const teste = 123;

function sum(a: number, b: number) {
    return a + b;
}

function concact(a: string, b: string) {
    return a + b;
}

sum(3, 2); // 5
concact('3', '2') // 32
// Tsunode2


const user: IUser = {
    name: 'Gabriel',
    age: 24,
    nickname: 'Tsunode',
    cpf: '12345678912',
    pet: {
        name: 'Yudi',
        type: 'cachorro'
    }
}

interface IUser {
    name: string;
    age: number;
    nickname: string;
    cpf?: string;
    pet?: IPet;
}

interface IPet {
    name: string;
    type: 'cachorro' | 'gato' | 'papagaio' | 'coala';
}

const pet: IPet = {
    name: 'Yudi',
    type: 'cachorro',
}


function isAdult(a: IUser) {
    if (a.age >= 18) {
        console.log('Maioridade')
    }
}

isAdult(user);

const users: IUser[] = [];
// const numbers: number[] = [];

// numbers.push(2)

users.push({ 
    age: 32, 
    name: 'Alex', 
    nickname: 'Alex', 
    cpf: '32165498712' 
});

if(pet.type === 'cachorro') {

}

// users[0].age

