// Q1 Add two Numbers


const AddTwoNumbers = (a,b) => {
    return a+b;
};


//Q2 Return the result as true if the given condition gets satisfied, else false.


const Is_Valid = (a,b) => {
    return (a<10&&a>b?true:false)
  };

  

//Q3   if both are divisible by 10 console true.
// if both are not divisible by 10 console false.
// if one of them only is divisible by 10 console true.
// Use operator to do this.

const Check = (A, B) => 
{
    if (A%10 == 0 && B%10 == 0){
    return true;
}
else if (A%10 != 0 && B%10 !=0){
  return false;
  
}
  else {
  return true;
}
};


// Q4 The first line contains one four digit natural number N

const First_Digit = (n) => {
    return parseInt(n/1000);
 };

 

//  Q5 Find the last digit of a 4 digit number

const Last_Digit = (n) => {
    return n%10
 };

//  Q6 Find the remainder

const Find_the_remainder = (a,b) => {
    return b%4;
};

// Q7 Multipy two Numbers


const Multiply_two_number = (a,b) => {
    return a*b
};


// Q8 Marks Calculator



const Sum = (A, B, C) => 
{
 return A+B+C
};

const Average = (A, B, C) => 
{
 return (A+B+C)/3
};