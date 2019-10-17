const tab = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];


function getValueTab() {
    for (var i = 0; i < tab.length; i++) {
        console.log(tab[i])
    }
}

function getReverseValue() {
    for (var i = tab.length; i >= 0; i--) {
        console.log(tab[i])
    }
}

function getValueMoreThree() {
    for (var i = 0; i < tab.length; i++) {
        if (tab[i] > 3) {
            console.log(tab[i])
        }
    }
}

function getEvenValue() {
    for (var i = 0; i < tab.length; i++) {
        if (tab[i] % 2 == 0) {
            console.log(tab[i])
        }
    }
}

function getBiggestValue() {
    let temp = 0;
    for (var i = 0; i < tab.length; i++) {
        if(tab[i] > temp){
            temp = tab[i]
        }
    }
    console.log(temp);
}

function getSmallestValue() {
    let temp = 0;
    for (var i = 0; i < tab.length; i++) {
        if(tab[i] < temp){
            temp = tab[i]
        }
    }
    console.log(temp);
}

getValueTab()
getReverseValue()
getValueMoreThree()
getEvenValue()
getBiggestValue()
getSmallestValue()

