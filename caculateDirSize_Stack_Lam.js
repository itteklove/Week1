/**
 * Created by tovan on 12/8/2016.
 */
var async = require('async');
const fs = require('fs');
function getSizeFile(path) {
    var size;
    var stats = fs.statSync(path);
    size = stats.size;
    console.log(size);
    return size;
}
function getSizeFolder(path) {
    // var size=0;
    // var stats = fs.statSync(path);
    // if(stats.isFile()){
    //     console.log(path + size);
    //     return getSizeFile(path);
    // } else {
    //     var arrayName = fs.readdirSync(path);
    //     arrayName.forEach(name =>{
    //         var pathChild = path+'/' + name;
    //         size= size+ getSizeFolder(pathChild);
    //     })
    // }
    // console.log(path + size);
    // return size;
    var size = 0;
    var stats = fs.statSync(path);
    if (stats.isFile()) {
        console.log(path + size);
        return getSizeFile(path);
    } else {
        var array = [];
        array = fs.readdirSync(path);
        while (array.length != 0) {
            var child = array.pop();
            var stats = fs.statSync(path + '/' + child);
            if (stats.isFile()) {
                size += getSizeFile(path + '/' + child)
            } else {
                var array2 = [];
                array2 = fs.readdirSync(path + '/' + child);
                array2.forEach(name => {
                    array.push(child + '/' + name);
                })
            }
        }
    }
    console.log(size);

}
getSizeFolder('./A');