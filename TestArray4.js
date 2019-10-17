const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let tab = [];
let rep;
let close = false

const question = () => {
    return new Promise((resolve, reject) => {
        rl.question('Veuillez choisir votre option', (val) => {
            rep = val;
            resolve()
        })
    })
}

const choice = () => {
    return new Promise((resolve, reject) => {
        rl.question('Quel nombre voulez-vous ajouter', (val) => {
            if (isNaN(val) == false) {
                tab.push(val)
            }
            resolve()
        })
    })
}

const main = async () => {
    while (close == false) {

        console.log('***** Menu principale *****')
        console.log('1. Ajouter un nombre')
        console.log('2. Afficher les nombres existants. ')
        console.log('3. Fermer le programme ')

        await question()

        switch (rep) {
            case "1":
                await choice()
                console.log('Valeur ajouter')
                break;
            case "2":
                console.log(tab)
                break;
            case "3":
                console.log("Fermeture du programme")
                close = true;
                break;
            default:
                console.log('Option inconnue')
                break;
        }
    }
    rl.close()
}

main()