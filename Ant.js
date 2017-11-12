const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

let count = 1;
let ant = '1';

console.log('1 \n')

while(true) {
  let antTmp = ant;
  ant = '';
  let tmp = antTmp.split('');
  for(var j = 0, len = tmp.length; j < len; j++ ) {
    let v = j + 1;
    if(tmp[j] == tmp[v]) {
      count++;
    }
    else {
      ant = ant + tmp[j] + count.toString();
      count = 1;
    }
  }
  console.log(ant + '\n');
}
