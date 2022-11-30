const data = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  about: document.getElementById("about"),
  age: document.getElementById("age"),
  btn: document.querySelector("#submit"),
  label: document.querySelectorAll(".labelError"),
  allInputs: document.querySelectorAll('.inputs')
};
console.log(data.allInputs)
valName = data.name.addEventListener("input", function (event) {
  if (event.target.value.length < 1) {
    this.classList.add("error");
    valName = false;
  } else {
    this.classList.remove("error");
    valName = true;
  }
  console.log
});

valEmail = data.email.addEventListener("input", function (event) {
  let reg = /[A-Z0-9._%+-]+@[A-Z0-9-]+.[A-Z]{2,4}/i;
  if (reg.test === false) {
    this.classList.add("error");
    valEmail = false;
  } else {
    this.classList.remove("error");
    valEmail = true;
  }
  console.log(valEmail);
});

valAbout = data.about.addEventListener("input", function (event) {
  if (event.target.value.length < 1) {
    this.classList.add("error");
    valAbout = false;
  } else {
    this.classList.remove("error");
    valAbout = true;
  }
  console.log(valAbout)
});

valAge = data.age.addEventListener("input", function () {
  if (data.age.value < 18) {
    this.classList.add("error");
    valAge = false;
  } else {
    this.classList.remove("error");
    valAge = true;
  }
  console.log(valAge)
});

function valGlobal() {
  if (valName && valEmail && valAge && valAbout === true) {
    data.btn.classList.remove("disabled")
  } else {
    data.btn.classList.add("disabled")
  }
  console.log(valGlobal)
}

data.allInputs.forEach((inputs) => (inputs.onblur = valGlobal))