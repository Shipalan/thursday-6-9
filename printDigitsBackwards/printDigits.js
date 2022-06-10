function printDigits(num){
let digit, result =0

    
    while (num){
        digit = num % 10                    //Get right most digit. Ex 123/10 == 12.3 == 3
        result = (result * 10) + digit;
        // console.log(digit)                   
        num = (num - digit) / 10           //Remove right most digit Ex. 123 == 12.3 == 12

    }  
    return result 
}

console.log(printDigits(2456))