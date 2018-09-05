  /*
        Developer:   Frankie Barrios
        Date:        09/04/18

        Purpose: Write a program that shows 
        all numbers between 1 and 100 with the 
        following exceptions:
        It shows "Fizz"
        instead if the number is divisible by 3.
        It shows "Buzz" instead if the number is 
        divisible by 5 and not by 3.
        When it 's done, improve it so that the 
        program shows "FizzBuzz" instead for numbers 
        divisible both by 3 and by 5.
        
        */

  let num = 1;
  for (i=1; i <= 10; i++)
  {
      console.log(`${num} X ${i} = ${num * i}`);
  }
 
/* 
  for (var i = 1; i <= 100; i++) 
  {

      if (i % 3 == 0 && i % 5 == 0)
          console.log("FizzBuzz");
      else if (i % 3 == 0)
          console.log("Fizz");
      else if (i % 5 == 0 && i % 3 != 0)
          console.log("Buzz");
      else
          console.log(i);
  } */