console.log('hello world');

const sum=(num1,num2)=>num1+num2;
const pi=3.142;
class smartmove{
    constructor(){
        console.log('object created');
    }
}


module.exports={sum:sum,pi:pi,smartmove:smartmove}
/*module.exports.sum=sum;
module.exports.pi=pi;
module.exports.smartmove=smartmove;*/

//module.exports=(name)=>console.log('Hello ${name}');

const http = require('http');

const server = http.createServer((req,res)=>{
    res.write('helllllllllllllllllllllllo');
    res.end();
}); server.listen('3000')

//working with module
/*const tutorial = require('./tutorial');

console.log(tutorial);
console.log(tutorial.sum(4,8));
console.log(tutorial.smartmove.call);
//console.log(tutorial(kennedy));


//Working with Eventemitter
const EventEmitter=require('events');
const eventEmitter=new EventEmitter();

eventEmitter.on('tutorial',()=>{
    console.log('tutorial event has occured');
});

eventEmitter.emit('tutorial');

class person extends EventEmitter{
    constructor(name){
        super();
        this._name=name;
    }

    get name(){
        return this._name;
    }
}

let pedro = new person('pedro');
let kennedy=new person('kennedy');

kennedy.on('name',()=>{      //listener
    console.log('my name is ' + kennedy._name);
})
pedro.on('name',()=>{
    console.log('my name is ' + pedro._name);
});

pedro.emit('name');
kennedy.emit('name');

//working with readline module
const readline = require('readline');
const rl=readline.createInterface({input:process.stdin, output:process.stdout});

let num1=Math.floor((Math.random()*10)+1);
let num2=Math.floor((Math.random()*10)+1);

let answer=num1+num2;
rl.question(`what is ${num1} + ${num2} ? `,(userinput)=>{
    if (userinput.trim()==answer) {
                rl.close();
    } else {
        rl.setPrompt('your answer is incorrect try again \n');
        rl.prompt();

        rl.on('line', (userinput)=>{
            if (userinput.trim()==answer) {
                rl.close();
            } else {
                rl.setPrompt(`your answer of ${userinput} is incorrect try again \n`);
                rl.prompt();
            }
        })
    }

    rl.on('close',()=>{
        console.log('smart :)');
    })
    //console.log(userinput);
});*/

//working with file system module
const fs = require('fs');
const zlib = require('zlib');

/*fs.writeFile('example.txt','this is my new file i created',(err)=>{  //creating a file
    if (err) {
        console.log(err);
    } else {
        console.log('Your file is successfully Created');
        fs.readFile('example.txt','utf8',(err,File)=>{
            if (err) {
                console.log(err);
            } else {
                console.log(File);
            }
        })
    }
})*/

/*
fs.rename('example.txt','myfile.txt',(err)=>{ //renaming a file
    if (err) {
        console.log(err);
    } else {
       console.log('Your File was successfully renamed'); 
    }
})

fs.unlink('myfile.txt',(err)=>{    //deleting a file
    if (err) {
        console.log(err);
    } else {
        console.log('You have successfully deleted this file');
    }
})

fs.mkdir('lesson',(err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log('Folder successfully created');
        fs.writeFile('./lesson/myfile.txt','new to node js and am making progress',(err)=>{
            if (err) {
                console.log(err);
            } else {
                console.log(`you have successfully created a file in folder ${dirname}`);
            }
        })
    }
})
*/

//deleting folder containing files

/*fs.readdir('lesson',(err,files)=>{
    if (err) {
        console,log(err)
    } else {
        console.log(files);
        for(let file of files){
            fs.unlink('./lesson/' + file,(err)=>{
                if(err)
                    console.log(err);
                else
                    console.log('Files successfully deleted.');
            })
        }
    }
})*/


//working with readable/writable stream and working with pipes and pipe chains
const readStream = fs.createReadStream('./lesson/myfile1.txt','utf8');
const writeStream = fs.createWriteStream('./lesson/myfile2.txt.gz');

/*readStream.on('data',(chunk)=>{
    console.log(chunk);
})

//or
//readStream.pipe(writeStream); //pipe
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip(); // use to decompress a file
readStream.pipe(gzip).pipe(writeStream); //creating a compressed file
*/



//creating HTTP server
/*const http = require('http');

const server = http.createServer((req,res)=>{
    res.write('helllllllllllllllllllllllo');
    res.end();
}).listen('3000')*/

/*const _=require('lodash');

var example=_.fill([1,2,3,4,5],'banana',1,4);
console.log(example);*/

/*app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + " : " + req.params.age);
    res.send(req.query.name + " : " + req.query.age);
});*/
