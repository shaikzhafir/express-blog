const fs = require('fs');
const matter = require('gray-matter');
var path = require("path");



function pathExtractor(dirPath,contentArray,dataClass) {
    const contentInDirectory = fs.readdirSync(path.resolve(__dirname,dirPath));
    contentInDirectory.forEach((content) => {
        const contentData = matter.read(path.resolve(__dirname,`${dirPath}/${content}`));
        const dataObject = new dataClass(contentData)
        contentArray.push(dataObject.getData())
        
    })
    console.log(contentArray);    
}


module.exports.pathExtractor = pathExtractor