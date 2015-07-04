/**
 * Created by Тито on 04/06/2015.
 */
var arr = [1, 2, 8, 11, 14, 18, 22];
var key = 18,
    first = 0,
    last = arr.length - 1;



while (last >= first) {
    var mid = parseInt((first + last) / 2);
    if (arr[mid] < key) {
        first = mid + 1;
    } else if (arr[mid] > key) {
        last = mid - 1;
    } else {
        console.log(mid);
        break;
    }
}