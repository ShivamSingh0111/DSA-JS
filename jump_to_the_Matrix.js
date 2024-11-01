const obj = {};
// Test case -1

// let N =3;
// let M = 4;
// let matrix =[
//   ['R','R','D','L'],
//   ['L','L','L','U'],
//   ['L','L','L','L'],
  
  
//   ]

// Test case -2

// let N =4;
// let M = 2;
// let matrix =[
//   ['R','D'],
//   ['U','L'],
//   ['R','L'],
//   ['U','U'],
 
  
//   ]


// Test case -3

let N =1;
let M = 2;
let matrix =[
  ['D','L'],

  ]

// Test case -4

// let N =3;
// let M = 3;
// let matrix =[
//   ['D','L',"L"],
//   ['D','L',"L"],
//   ['D','L',"L"],
//   ]

let count =0;
let row ='0';
let col ='0';

while(!obj[row+col] ){
  if(parseInt(row)<0 || parseInt(col)<0){
  console.log(count);
  
    return
  }  
  else if(N<parseInt(row)+1 || M<parseInt(col)+1){
    console.log(count);
    return
  }
  
  obj[row+col] = true;
  count++
// console.log(row,col);
  if(matrix[row][col]=='R'){
    col = parseInt(col)+1;
     
  }else if(matrix[row][col]=='L'){
  col = parseInt(col)-1
    
  }else if(matrix[row][col]=='U'){
    row = parseInt(row)-1
     
  }else if(matrix[row][col]=='D'){
    row = parseInt(row)+1
     
  }
  
  row = row.toString();
  col = col.toString();
}

console.log("jump of the matrix", count);
console.log(obj);
