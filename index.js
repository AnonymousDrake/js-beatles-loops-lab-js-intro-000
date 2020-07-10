var theBeatlesPlay= (musicians,instruments) =>{
  var array=[];
  for(let i=0;i<musicians.length;i+=1){
    array.push($[musicians[i]]+" plays " +$[instrument[i]])
  }
  return array;
}
