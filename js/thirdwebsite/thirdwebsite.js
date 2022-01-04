function onFocus(label){
    var l = document.getElementById(label);
    l.style.color = "#5f8b86";
    l.style.backgroundColor = "#5f5f5f";
}

function onBlur(input, label){
    var l = document.getElementById(label);
    var i = document.getElementById(input);
    if(i.value.length == 0){
        l.style.color = "transparent";
        l.style.background = "transparent";
    }
}

function validateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}