//  1st  WAP TO TAKE INPUT FROM USER. YOU HAVE TO PERFORM CALCULATIONS BASED ON INPUT ,
//  WHEN USER GIVE 1 INT YOU HAVE TO PERFORM  ADDITION OF TWO NO ,
//  2 FOR SUB, 3 FOR MULTIPLICATION , 4 FOR DIVISION OTHERWISE PRINT INVALID USSING LADDER IFELSE

// 2nd wap to find grade of student according to percentage take 5 inputs( subject marks) then
// find percentage then print grade accordingly  

// 3rd wap too take input from the user and check 1 input is divisoble by 3 or not if no is divisible
// by 3 then find area of rectangle of 1 and 2 input. if number is not divisible by 3 then add all 
// input and print it


//1st

// let num=parseInt(prompt("Enter no:"))
// if(num==1)
// {
//     console.log(5+5);
// }
// else if(num==2)
// {
//     console.log(5-2)
// }
// else if(num==3)
// {
//     console.log(3*4)
// }
// else if(num==4)
// {
//     console.log(5/3)
// }
// else{
//     console.log("invalid")
// }


//2nd

// let marks=prompt("Enter your marks")
// if(marks>80 && marks<=100)
// {
//     console.log("Grade A")
    
// }
// else if(marks>60 && marks<=79)
// {
//     console.log("Grade B")
    
// }
// else if(marks>40 && marks<=59)
// {
//     console.log("Grade C")
    
// }
// else if( marks>=39)
// {
//     console.log("Grade D ")
    
// }
// else{
//     console.log("invalid input");
    
// }

// 3rd
let f=parseInt(prompt("Enter no:"))
let s=3
let t=4
if(f%3==0)
{
    console.log("Area of rectagle of 1 and 2 input:",f*s);
    
}
else{
    console.log(f+s+t);
    
}