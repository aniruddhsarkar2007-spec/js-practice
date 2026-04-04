// async function access()
// {
//   let d= await fetch('https://jsonplaceholder.typicode.com/comments')
//   let a= await d.json()
//   console.log(a);
//   //  let n= a.map((e)=>{return e.name}) // here e means event object
//   //  console.log(n)
  
//   let data=a.map((i)=>`
//   <tr>
//   <td>${i.id}</td>
//     <td>${i.name}</td>
//       <td>${i.email}</td>
//       </tr>
//   `).join("")
//   document.getElementById("showdata").innerHTML=data
// }
//   access()

let h= document.querySelector(".demo")
console.log(h)