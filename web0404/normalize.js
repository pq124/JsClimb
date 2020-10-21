const path = require('path');
var src01 = "C:/Users/10841/Desktop/node.js/fs_04_1019_project"
console.log(path.normalize(src01));

var stringPath = path.join("C:","Users","10841","Desktop");
console.log(stringPath)

//path.relative();
//
var filePath ="C:/Users/10841/Desktop/nodejs_07/code/fs_stats_04_1021/1.txt";
var dirPath = "C:/Users/10841/Desktop/";
console.log(path.relative(filePath,dirPath));
