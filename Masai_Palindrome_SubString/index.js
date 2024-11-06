// here i will  check given sub-String is Palindrome or not. 
function isPalindrome(str){
    let left =0;
    let right =str.length-1;
    while(left<right){
      if(str[left]!=str[right]){
        return false
      }
      left++;
      right--;
    }
    return true;
  }
  
  function masaiPalSubString(S){
  if(S.length<=1){
    console.log(S.length); 
    return
  }
      //write code here
      let max = -Infinity;
      for(let i=0; i<S.length; i++){
        let subStr="";
        for(let j=i; j<S.length; j++){
           subStr+=S[j];
           if(isPalindrome(subStr) && subStr.length>1){
          // console.log(subStr);
          if(subStr.length>max){
            max = subStr.length;
          }
        }
        }
        // console.log(subStr);
        
      }
      console.log(max);
  }
  let S="thisracecarisgood"; //Output will be 7...
  masaiPalSubString(S)