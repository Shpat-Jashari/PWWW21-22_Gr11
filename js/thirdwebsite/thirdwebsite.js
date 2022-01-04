// const emailText = document.getElementById("email");
// const submitButton = document.querySelector(".submit-button");

function validateEmail(email) 
{
    
console.log(email.value);
 if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value))
  {
    console.log("asdas");
    return (true)
  }else{
    console.log("else");
    alert("You have entered an invalid email address!")
  }
}

// validateEmail(emailText.value)
submitButton.addEventListener("click", validateEmail(emailText))