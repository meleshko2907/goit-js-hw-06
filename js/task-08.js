const form = document.querySelector(".login-form");

const loginFormSubmitHeandler = (event) => {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formData = {
    email,
    password,
  };
  if (email === "" || password === ""){
    return alert ("Заповніть форму"); 
  }
    console.log(formData);

    event.currentTarget.reset();
    
};
form.addEventListener("submit", loginFormSubmitHeandler);
