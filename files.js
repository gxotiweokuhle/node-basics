//how to read, write,  check exists, directories and delete 
//read file using async
const fs = require('fs');

fs.readFile('./docs/data.txt', (err, data) => {

    if (err) {
        console.log(err);
    }
    console.log(data.toString());//converts that buffer data given in numbers to strings so we can read it
});
//console.log('last line');starting reading here, then callback function and data is logged into the console

//check if file exists
fs.access('./docs/data.txt', fs.constants.F_OK, (err) => {
    if (err) {
        console.log('File does not exist');
    } else {
        console.log('File exists')
    }
})



//write a file
//const fs = require('fs');
// fs.writeFile('./docs/data.txt', 'having fun learning node', () => {
//     console.log('file was written');
// })
//to create a file 
//change a dir to a non-exist file aand it will create it and input the text
// fs.writeFile('./docs/blog2.txt', 'creating file 2', () => {
//     console.log('file was written 2');
// })

//directories, create a folder
// if(fs.existsSync('./assets')) { //if it exists it will throw an error and if not it will create one

//     fs.mkdir('./assets', (err) => {
//         if (err){
//             console.log(err);
//         }
//         console.log('folder created');
//     })
// } else{ //removes a folder
//     fs.rmdir('./assets', (err) => {
//         if (err){
//             console.log(err)
//         }
//         console.log('folder deleted');
//     })
// }
// //delete  existing files

// if(fs.existsSync('./docs/delete.txt')) {
//     fs.unlink('./docs/delete.txt')
// }