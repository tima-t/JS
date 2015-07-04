/**
 * Created by Òèòî on 04/06/2015.
 */
var
    arrayNumbers = [2, 11, 23, 5, 1, 19, 8],
    temp, i, j;

for (i = 0; i < arrayNumbers.length - 1; i += 1) {

    for (j = i + 1; j < arrayNumbers.length; j += 1) {

        if (arrayNumbers[i] > arrayNumbers[j]) {
            temp = arrayNumbers[i];
            arrayNumbers[i] = arrayNumbers[j];
            arrayNumbers[j] = temp;
        }
    }
}

console.log('Selection sorted array is: [' + arrayNumbers + ']');