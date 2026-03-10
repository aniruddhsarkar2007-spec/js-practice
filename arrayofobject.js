// let student=[
//     {
//         name:"deep",
//         age:18
//     },
//      {
//         name:"dilip",
//         age:15
//     },
//      {
//         name:"shuv",
//         age:18
//     }
// ]
// console.log(student[1]);



// filter


let emp = [
    {
        name:"raj",
        salary:28900,
        age:31
    },
     {
        name:"raju",
        salary:18900,
        age:23
    },
     {
        name:"vishu",
        salary:12000,
        age:38
    },
     {
        name:"vijay",
        salary:22900,
        age:19
    },
     {
        name:"preet",
        salary:10000,
        age:27
    }
]

let a= emp.filter((i)=>{return i.age>30 && i.salary>15000})
console.log(a);