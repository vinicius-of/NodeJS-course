const fs = require('fs');

// Um função sicronizada - Irá ler todo o conteúdo do arquivo antes
// de avançar no código
// const read = fs.readFileSync("readTest", 'utf8');
// console.log(read);
// fs.writeFileSync('writeText.txt', "Here a writing test!", 'utf8');

//Program to create a simple dir and use as a temp dir

const msg = "You should watch your back...";

if(!fs.existsSync('temp')){
    fs.mkdir('./temp', () => {
        console.log("Directory created");
        fs.writeFileSync('temp/written.txt', msg);
        console.log('File created');
    });
} else {
    fs.unlink('temp/written.txt', () => {
        console.log('File deleted');
        fs.rmdir('temp', () => {
            console.log('Directory removed');
        });
    });
}