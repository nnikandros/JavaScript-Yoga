function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}



//
function positiveSum(arr){
  let sum = 0 ;
  for (let item of arr){
    if (item > 0){
       sum+= item;}}
return sum
}
