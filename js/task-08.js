
const form = document.querySelector(".login-form");

const loginFormSubmitHeandler = (e) => {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;
  const formData = {
    email,
    password,
  };
  if(email === "" || password === ""){
    return alert("Заповніть строку");
  }
  console.log(formData);
  e.currentTarget.reset();
};

form.addEventListener('submit', loginFormSubmitHeandler);
