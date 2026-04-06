// let student= [
//     {
//         name:"Shyam",
//         class:12,
//         city:"Chhindwara"
//     },
//      {
//         name:"Shivam",
//         class:11,
//         city:"Bhopal"
//     },
//      {
//         name:"Nikku",
//         class:12,
//         city:"Jaipur"
//     }
// ]

// let call=student.map((e)=>{return e.city})
// console.log(call);


// function ne()
// {
//     document.body.style.backgroundColor="red"
// }
// function ne1()
// {
//     document.body.style.backgroundColor="blue"
// }
// function ne2()
// {
//     document.body.style.backgroundColor="pink"
// }
// function ne3()
// {
//     document.body.style.backgroundColor="purple"
// }
// function ne4()
// {
//     document.body.style.backgroundColor="black"
// }
// function ne5()
// {
//     document.body.style.backgroundColor="green"
// }

// function ne(l)
// {
//     document.body.style.backgroundColor=(l)
// }

// function fun()
// {
//     let a=parseInt(prompt("Enter the first number:"))
//     let b=parseInt(prompt("Enter the second number:"))
//     alert(a+b)
// }

let v=0;
let st

function  start()
{
st=setInterval(()=>
{
    document.getElementById("count").textContent=v++},100)
}


function stop()
{
    clearInterval(st)
}

function restart()
{
    v=0
    document.getElementById("count").textContent=v,100
    clearInterval(st)
}