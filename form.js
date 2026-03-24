function validate()
{
    let name=document.getElementById('name').value
    let age=document.getElementById('age').value
    let city=document.getElementById('city').value
    let contact=document.getElementById('contact').value
    let email=document.getElementById('email').value
    let pass=document.getElementById('password').value
    let cpass=document.getElementById('cpass').value

    if(name=='')
    {
        alert("Please enter your name")
        document.getElementById('name').focus()
        return false
    }
    else if(age=='')
    {
        alert("Please enter your age")
        document.getElementById('age').focus()
        return false
    }
    else if( isNaN(age) )
    {
        alert("Please enter age in digits")
        document.getElementById('age').focus()
        return false
    }
    else if( age>999 || age<0 )
    {
        alert("Please enter your age between 0 and 999")
        document.getElementById('age').focus()
        return false
    }
    else if(city=='')
    {
        alert("Please enter your city")
        document.getElementById('city').focus()
        return false
    }
    
    else if(contact=='')
    {
        alert("Please enter your contact")
        document.getElementById('contact').focus()
        return false
    }
    else if(isNaN(contact))
    {
        alert("Please enter contact no. in digits")
        document.getElementById('contact').focus()
        return false
    }
    else if( contact.length > 10 || contact.length<10  )
    {
        alert("Please enter 10 digit contact no.")
        document.getElementById('contact').focus()
        return false
    }

    else if(email==""){
        alert("please enter email")
        document.getElementById('email').focus()
        return false
    }
   
    else if(!(email.includes('@gmail.com'))){
        alert("please enter valid email")
        document.getElementById('email').focus()
        return false
    }

     else if(pass==""){
        alert("please enter password")
        document.getElementById('password').focus()
        return false
    }

    else if(!(pass.match(/[~!@#_$%^]/))){
        alert("please enter atleast onr special character")
        document.getElementById('password').focus()
        return false
    }
  
       else if(cpass==""){
        alert("please enter password")
        document.getElementById('cpass').focus()
        return false
    }

    else if(cpass!=pass){
        alert("Password mismatch")
        document.getElementById('cpass').focus()
        return false
    }

    // else if(cpass.length<=8 || cpass.length>=15){
    //  alert("Error")
    //  document.getElementById('cpass').focus()
    //  
    // }
return false
}