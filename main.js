// const mail = document.querySelector(".input").value;
// const button = document.querySelector(".button");

// validateEmail = () => {
// 	const regx = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
// 	if (mail.match(regx)) {
// 		alert("poprawny email");
// 		return true;
// 	} else {
// 		alert("niepoprawny email");
// 		return false;
// 	}
// };
// button.addEventListener("click", validateEmail);

function validation() {
	let email = document.getElementById("email").value;
	const input = document.getElementById("email");
	const button = document.querySelector(".button");
	const error = document.querySelector(".error");
	const messageError = document.querySelector(".message-error");
	let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	if (email.match(pattern)) {
		error.classList.remove("display");
		messageError.classList.remove("display");
		input.classList.remove("input-error");
	} else {
		error.classList.add("display");
		messageError.classList.add("display");
		input.classList.add("input-error");
	}
}
