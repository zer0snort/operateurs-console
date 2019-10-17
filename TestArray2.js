const tab = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

function getMean() {
    let total = 0;
    for (var i = 0; i < tab.length; i++) {
        total += tab[i];
    }
    console.log(total / tab.length)
}

function getIndexValue() {
    for (var i = 0; i < tab.length; i++) {
        if (tab[i] == 15) {
            console.log(i)
        }
    }
}

function getDuplicateValue(){
    let nbDublicate = 0;
    let nbDublicateTot = 0;
    for (var i = 0; i < tab.length; i++) {
        nbDublicate = 0
        for(var y = 0; y < tab.length; y++){
            if(tab[i] == tab[y]){
                nbDublicate++
            }
        }
        if (nbDublicate == 2){
            nbDublicateTot++;
        }
    }
    console.log(nbDublicateTot/2);
}

getMean()
getIndexValue()
getDuplicateValue()