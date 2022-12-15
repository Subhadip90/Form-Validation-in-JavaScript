const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone_number')
const password = document.getElementById('password')
const cpass = document.getElementById('confirm_password')

//  add event

form.addEventListener('submit', (event) => {
  event.preventDefault()
  validate()
})

const sendData = (usernameval, sRate, count) => {
  if (sRate === count) {
    alert("Registration Successfull")
    swal("Welcome! " + usernameval, "Registration Succcessfull", "success")
    // location.href = `demo.html?username=${usernameval}`
  }
}

// final data validation

const successMsg = (usernameval) => {
  let formCon = document.getElementsByClassName('form-control')
  var count = formCon.length - 1
  for (var i = 0; i < formCon.length; i++) {
    if (formCon[i].className === "form-control success") {
      var sRate = 0 + i
      sendData(usernameval, sRate, count)
    } else {
      return false
    }
  }
}

// more email validate

const isEmail = (emailval) => {
  var atSymbol = emailval.indexOf("@")
  if (atSymbol < 1) return false;
  var dot = emailval.lastIndexOf(".")
  if (dot <= atSymbol + 2) return false
  if (dot === emailval.length - 1) return false
  return true
}

// define the validate function

const validate = () => {
  const usernameval = username.value.trim()
  const emailval = email.value.trim()
  const phoneval = phone_number.value.trim()
  const passwordval = password.value.trim()
  const cpassval = confirm_password.value.trim()

  // validate username

  if (usernameval === "") {
    setErrorMsg(username, "username cannot be blank")
  } else if (usernameval.length <= 2) {
    setErrorMsg(username, "username min 3 char")
  } else {
    setSuccessMsg(username)
  }

  // validate email
  if (emailval === "") {
    setErrorMsg(email, "email cannot be blank")
  } else if (!isEmail(emailval)) {
    setErrorMsg(emailval, "Not a valid email")
  } else {
    setSuccessMsg(email)
  }

  // validate phone
  if (phoneval === "") {
    setErrorMsg(phone, "phone number cannot be blank")
  } else if (phoneval.length != 10) {
    setErrorMsg(phone, "Not a valid phone number")
  } else {
    setSuccessMsg(phone)
  }

  // validate password
  if (passwordval === "") {
    setErrorMsg(password, "password cannot be blank")
  } else if (passwordval.length <= 5) {
    setErrorMsg(password, "Minimum 6 char")
  } else {
    setSuccessMsg(password)
  }

  // validate confirm password
  if (cpassval === "") {
    setErrorMsg(confirm_password, "confirm password cannot be blank")
  } else if (passwordval != cpassval) {
    setErrorMsg(confirm_password, "passwords are not matching")
  } else {
    setSuccessMsg(confirm_password)
  }

  successMsg(usernameval)
}

function setErrorMsg(input, errormsgs) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')
  formControl.className = 'form-control error'
  small.innerText = errormsgs
}

function setSuccessMsg(input) {
  const formControl = input.parentElement
  formControl.className = "form-control success"
}