    /*
    *       Bucket sort in Java
    *   Using a part of Bucket sort to count element in Array.
    *
    * */


function initalArray(leng) {                     /* Inital value 0 for all element in array */
    let arr = [];
    for(let i = 0; i < leng; i++) {
        arr[i] = 0;
    }
    return arr;
}

function getElementMax(arrs) {                  /* Get Element Max in Array */
    var max = arrs[0];
    for(let i = 1; i < arrs.length; i++) {
        if(max < arrs[i]) {
            max = arrs[i];
        }
    }
    return max;
}

function countElement(boundArr, arr) {          /* Count element's times in Array*/
    for (let i=0; i < arr.length; i++) {
        boundArr[arr[i]]++;
    }
    return boundArr;
}

var data = [100,3,0,2,4,1,0,5,2,3,1,4];
var arrT = initalArray(getElementMax(data));

var arrResult = countElement(arrT, data);

console.log(arrResult);










