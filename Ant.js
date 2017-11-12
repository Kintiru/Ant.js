let count = 1,
    ant = '1';

console.log('1 \n')

while(true) {
  let antTmp = ant,
      tmp = antTmp.split('');
  ant = '';
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
