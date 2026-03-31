function main(){
    let name=document.getElementById("name").value
    let contact=document.getElementById("contact").value
    let password=document.getElementById("password").value
    let cpass=document.getElementById("cpass").value


    if(name==""){
        alert("Please Enter your name!!")
        document.getElementById("name")
        return false
    }
    else if(contact==""){
        alert("Please enter contact number ")
          document.getElementById("contact")
         return false
    }
    else if(contact.length>10 || contact.length<10){
        alert("Number should be of 10 digits!!")
          document.getElementById("contact")
         return false
    }
    else if(isNaN(contact)){
        alert("Only numbers are allowed!! ")
          document.getElementById("contact")
         return false
    }
    else if(password==""){
        alert("Enter the password")
          document.getElementById("password")
         return false
    }
    else if(cpass!=password){
        alert("Password Missmatch")
         document.getElementById("cpass")
    }
     return false
}