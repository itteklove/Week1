/**
 * Created by tovan on 12/8/2016.
 */
var async = require('async');
const fs = require('fs');
function getSizeFile(path){
    var size;
    var stats = fs.statSync(path);
    size =stats.size;
    console.log(size);
    return size;
}
function getSizeFolder(path) {
    var size=0;
    var stats = fs.statSync(path);
    if(stats.isFile()){
        console.log(path + size);
        return getSizeFile(path);
    } else {
        var arrayName = fs.readdirSync(path);
        arrayName.forEach(name =>{
            var pathChild = path+'/' + name;
            size= size+ getSizeFolder(pathChild);
        })
    }
    console.log(path + size);
    return size;

}

// var b=fs.readdirSync('./A');
// console.log(b);
// getSizeFile('./A/text')
getSizeFolder('./A')

