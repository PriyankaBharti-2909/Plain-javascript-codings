let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let startNumber= parseInt(readLine())
let endNumber=parseInt(readLine())

for(let i=startNumber;i<endNumber;i++){
    if(i>=0){
        console.log(i);
    }
}
