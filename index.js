var theBeatlesPlay= (musicians,instruments) =>{
  var array=[];
  for(let i=0;i<musicians.length;i+=1){
    array.push(musicians[i]+" plays " +instruments[i])
  }
  return array;
}

var johnLennonFacts= facts =>{
  let i=0;
  while(i!=facts.length){
    i+=1;
    facts[i-1]=facts[i-1]+"!!!";
  }
}
