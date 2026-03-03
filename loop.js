

//  do{
//     //code
//    }
//  while(condition) 

// let s=1
// do{
//     console.log(s)
//     s++
// }

// while(s<6)




// let s=5
// do{
//     console.log(s)
//      s--
// }

//  while(s>=0)


// let a= parseInt(prompt("Enter a number:"))
// let b=1
// do{
//     console.log(a*b)
//     b++
// }

// while(b<=10)



//WHILE LOOP

// let x=1
// while(x<16)
// {
//     console.log("INDIA")
//     document.write("india","<br>")
//     x++
// }



//Wap to print sum of all digit btwn 10 to 1
//Wap to print square of all even numbers between 5-15
//Wap to print square of all no between 1-100 


// let a=10
// let sum=0
// while(a>=0)
// {
//     sum+=a
//     a-- 
// }
// console.log(sum)

// let a=5
// while(a<=15)
// {
//     if(a%2==0){
//         console.log(a*a)  
//     }
//     a++
// }

// let a=1
// while(a<=100)
// {
//     console.log(a*a)
//     a++
// }


// Nested  for loop

// syntax:
// for(initialization;conditon;increment/decrement)
//     {
//         for()
//         {}
//     }  


//table

// for(let a=2;a<=3;a++)
// {
//     for(let r=1;r<=10;r++){
//         console.log(a*r)
//     }
// }


// for (let r=1;r<=5;r++)
// {
//     for(let c=1;r<=c;c++){
       
//         document.write("*")
//     }
//     document.write("<br>")
// }


// for (let r=1;r<=4;r++)
// {
//     for(let c=1;c<=4;c++){
       
//         document.write("*")
//     }

//   document.write("<br>")

// }

// for(let r=1;r<=5;r++)
// {
//     for(let c=5;c>=r;c--)
//     {
//         document.write("*")
//     }
//     document.write("<br>")
// }



// *****
//   *
//   * 
//   * 
//   *  

// ^
// |
// for(let r=1;r<=5;r++)
// {
//     for(let c=1;c<=5;c++)
//     {
//         if(r==1 || c==3)
//         {
//             document.write("8 ")
//         }
//         else{
//             document.write("&nbsp&nbsp&nbsp")
//         }
//     }
//     document.write("<br>")
// }



// *****
// *   *
// *   *
// *   *
// *****

// for(let r=1;r<=5;r++)
// {
//     for(let c=1;c<=5;c++)
//     {
//         if(r==1 || r==5 || c==1 || c==5)
//         {
//             document.write("8 ")
//         }
//         else{
//             document.write("&nbsp&nbsp&nbsp")
//         }
//     }
//     document.write("<br>")
// }


// for of loop

let emp =["Deepali","bhpl",341241241,"Cybrom"]

    for(let v of emp)
    {
        console.log(v)
    }
