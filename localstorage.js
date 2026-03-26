function hii(){
    let name=document.getElementById("name").value
        let age=document.getElementById("age").value
            let course=document.getElementById("course").value

            localStorage.setItem("username",name)
             localStorage.setItem("userage",age)
              localStorage.setItem("usercourse",course)

}