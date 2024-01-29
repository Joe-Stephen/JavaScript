const { isUtf8 } = require('buffer');
const fs = require('fs');
const readFilePath = './sample.txt';
const writeFilePath = './newFile.txt';

// reading file synchronously

// try{
//     const data = fs.readFileSync(readFilePath, 'utf-8');    
//     console.log("The sync data= ", data);
// }catch(error){
//     console.log(error);
// };

// console.log("sync end");

// reading file asynchronously


//     fs.readFile(readFilePath, 'utf-8', (err, data)=>{
//         if(err){
//             console.error(`Error reading file: ${err.message}`);
//             return;
//         }
//         console.log("async data= ", data);
//     });

// console.log("async end");


//reading and writing-sync

// try {
//     const data = fs.readFileSync(readFilePath, 'utf-8');
//     console.log(data);
//     fs.writeFileSync(writeFilePath, data, 'utf-8');
// } catch (error) {
//     console.log(error);
// }

// reading and writing-async

// fs.readFile(readFilePath, 'utf-8',(err, data)=>{
//     if(err){
//         console.error(err);
//         return;
//     };
//     fs.writeFile(writeFilePath, data, 'utf-8', (err)=>{
//         if(err){
//             console.error(err);
//             return;
//         }
//         console.log("new file made!");
//     });
// });

// reading the file and adding '1' after each encounter of a vowel.

// fs.readFile(readFilePath, 'utf-8', (err, data)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     const newData = data.split('').map(char=>{
//         if('aeiouAEIOU'.includes(char)){
//             return 1;
//         }else{
//             return 0;
//         }
//     }).join('');
//     fs.writeFile(writeFilePath, newData, 'utf-8', (err)=>{
//         if(err){
//             console.error(err);
//             return;
//         }
//         console.log("done!");
//     });
// });

//readline set-up
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name ?', (answer)=>{
    console.log(`Hello ${answer} !`);
    rl.close();
});