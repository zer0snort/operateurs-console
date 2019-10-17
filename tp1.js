const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let value1;
let value2;
let total;

console.log('*****  Application Opérateurs *****')

const question1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Veuillez saisir le premier nombre…', (val1) => {
            value1 = val1;
            resolve()
        })
    })
}

const question2 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Veuillez saisir le second nombre…', (val2) => {
            value2 = val2
            resolve()
        })
    })
}

const main = async () => {
    await question1()
    await question2()
    rl.close()

    total = Number(value1) + Number(value2)
    console.log(value1 + " + " + value2 + " = " + total)

    total = Number(value1) - Number(value2)
    console.log(value1 + " - " + value2 + " = " + total)

    total = Number(value1) * Number(value2)
    console.log(value1 + " * " + value2 + " = " + total)

    if(Number(value2) == 0){
        console.log('Division par 0 impossible')
        console.log('Modulo par 0 impossible')
    }else{
        total = Number(value1) / Number(value2)
        console.log(value1 + " / " + value2 + " = " + total)

        total = Number(value1) % Number(value2)
        console.log(value1 + " % " + value2 + " = " + total)
    }
}

main()
