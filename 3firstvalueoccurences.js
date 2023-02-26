let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n=parseInt(readLine());
let first_value=parseInt(readLine());
let count=1;
for(let i=1;i<n;i++){
    let num=parseInt(readLine());
    if(num==first_value){
        count++;
    }
}
console.log(count);


