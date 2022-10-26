// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    //...
    let newStr = String(n);
    let newArr = [];
    let newNewStr = '';
    let finalStr ='';
  
      newArr.push(newStr.charAt(0));
      
  
    for(let i = 0; i < newStr.length; i++){
      if(newStr.charAt(newStr.length-2-i) < newStr.charAt(newStr.length-1-i)){
        newArr.pop(newStr.length-2-i);
        newArr.push(newStr.charAt(newStr.length-2-i));
      }else if(newStr.charAt(newStr.length-2-i) > newStr.charAt(newStr.length-1-i)){
        newArr.push(newStr.charAt(newStr.length-1-i));
      }else if(newStr.charAt(i) === newStr.charAt(i+1)){
        newArr.push(newStr.charAt(newStr.length-1-i));
      }
    }
    
    for(let i = 0; i < newArr.length; i++){
        if(newArr[newArr.length-2-i] > newArr[newArr.length-1-i]){
          newArr.pop(newArr[newStr.length-2-i])
          newArr.push(newArr[newStr.length-2-i])
      }
    }
    
    for(let i = 0; i < newStr.length; i++){
    newNewStr += newArr[i];
    }
    
      
    for(let i = 0; i < newStr.length; i++){
    finalStr += newNewStr[i];
    }
    
    
    return parseInt(finalStr);
  }