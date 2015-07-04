/**
 * Created by Тито on 04/06/2015.
 */
var array= [4, 2, 1, 4, 2, 1, 5, 1, 1, 2, 4, 4, 1];
var mode = getMode(array);
console.log(mode[0] + ' (' + mode[1] + ' times)');

function getMode(arr){
    var modeMap = {},
        maxNum = arr[0],
        maxCount = 1;

    for (var ind = 0; ind < arr.length; ind++) {
        var num = arr[ind];

        if (modeMap[num] == null) {
            modeMap[num] = 1;
        } else {
            modeMap[num]++;
        }

        if (modeMap[num] > maxCount) {
            maxNum = num;
            maxCount = modeMap[num];
        }
    }

    return [maxNum, maxCount];
}