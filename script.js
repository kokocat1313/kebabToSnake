const isEven = num => {
    if (num % 2 === 0){
        return true
    }else
      {
        return false
      }
    }
    
    console.log(isEven(6));

    //factorial

    const factorial = num => {
        if (num > 0 && num <= 1 ) {
            return 1;
        } else {
            return num * factorial(num - 1)
        }
    }
 console.log(factorial(5));

 // kebabToSnake

 const kebabToSnake = str => str.replace("-", "_")


console.log(kebabToSnake("Hi-There"));
