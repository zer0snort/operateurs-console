const tab = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4]

function sortArray(oTab) {

    temp = 0;
    change = false;
    do {
        change = false;
        for (i = 0; i < oTab.length - 1; i++) {
            if (oTab[i] > oTab[i + 1]) {
                temp = oTab[i];
                oTab[i] = oTab[i + 1];
                oTab[i + 1] = temp;
                change = true;
            }
        }
    } while (change);

    console.log(oTab)
}

sortArray(tab)