console.log("ITS WORKSS");

const wes = document.querySelector(".wes");

wes.addEventListener("click", function (event) {
  // alternative prompt, Window.prompt() displays a dialog with an optional message prompting the user to input some text.
  const shouldChangePage = confirm(
    "This website might be malicious!, do you wish to proceed?"
  );
  if (!shouldChangePage) {
    event.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener("submit", function (event) {
  const name = event.currentTarget.name.value;
  if (name.includes("chad")) {
    alert("Sorry bro");
    event.preventDefault();
  }
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}
signupForm.name.addEventListener("keyup", logEvent);
signupForm.name.addEventListener("keydown", logEvent);
signupForm.name.addEventListener("focus", logEvent);
signupForm.name.addEventListener("blur", logEvent);

const photo = document.querySelector(".photo");

function handlePhotoClick(event) {
  if (event.type === "click" || event.key === "Enter") {
    console.log("You clicked the photo");
  }
}

photo.addEventListener("click", handlePhotoClick);
photo.addEventListener("keyup", handlePhotoClick);
