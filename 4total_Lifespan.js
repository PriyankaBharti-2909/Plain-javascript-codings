let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let TotalValue=parseInt(readLine());
let total_lifespan=0
for(let i=0;i<TotalValue;i++){
    let num=parseInt(readLine());
    if(num>0){
        total_lifespan+=num;
    }

}
console.log(total_lifespan)
