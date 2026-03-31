function hello(){
    let name=document.getElementById("name").value
     let course=document.getElementById("course").value
      let age=document.getElementById("age").value

      localStorage.setItem("username",name)
        localStorage.setItem("usercourse",course)
          localStorage.setItem("userage",age)
}

       let a= localStorage.getItem("username")
       let b= localStorage.getItem("usercourse")
       let c=localStorage.getItem("userage")

       document.write(a,"<br>")
        document.write(b,"<br>")
         document.write(c,"<br>") 