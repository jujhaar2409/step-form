var fields = ["Username", "Phone no", "Password", "Confirm Password"];
var data = ["", "", "", ""];

var container1 = document.getElementById("container-1");
var container2 = document.getElementById("container-2");
var container3 = document.getElementById("container-3");
var progressBar = document.getElementById("progress");
var label = document.getElementById("label");
var submitBtn = document.getElementById("submit-button");
var backBtn = document.getElementById("back-button");
var textInput = document.getElementById("text-input");
var form1 = document.getElementById("form-1");
var slider = document.getElementById("slider");
var body = document.getElementById("body");

var field = -1;
var prog = field + 1;

container1.style.opacity = "100%";
container3.style.opacity = "100%";

// progressBar.innerHTML = "Progress: " + (prog / fields.length) * 100 + "%";
progressBar.style.width = "0%";
label.innerHTML = fields[field + 1];

form1.addEventListener("click", btnClick);
slider.addEventListener("click", sliderClick);

function btnClick(event) {
	event.preventDefault();

	if (event.target == submitBtn) {
		progressBar.style.opacity = "100%";
		// transition();
		field++;
		prog = field + 1;
		if (prog == fields.length && data[2] != textInput.value) {
			alert("passwords do not match!");
			field--;
		} else if (prog == fields.length + 1) {
			container1.style.opacity = "0";
			container3.style.opacity = "0";
			// conatiner1.style.display = "none";
			container2.style.opacity = "100%";
			container2.innerHTML =
				"<h3>Your form has been submitted " +
				data[0] +
				"</h3>" +
				"<p>Made by Jujhaar Singh</p>";
		} else if (prog == fields.length && data[2] == textInput.value) {
			data[field] = textInput.value;
			label.innerHTML = "Done!";
			progressBar.style.width = "96%";
			// progressBar.innerHTML =
			// 	"Progress: " + (prog / fields.length) * 100 + "%";
			// textInput.style.display = "none";
			// submitBtn.style.flex = "10";
			submitBtn.value = "Finish!";
		} else {
			label.innerHTML = fields[field + 1];
			progressBar.style.width = (prog / fields.length) * 100 + "%";
			backBtn.style.opacity = "100%";
			// progressBar.innerHTML =
			// 	"Progress: " + (prog / fields.length) * 100 + "%";
			data[field] = textInput.value;
			textInput.value = data[prog];
		}
	} else if (event.target == backBtn && label.innerHTML != fields[0]) {
		// transition();
		field--;
		prog = field + 1;
		if (prog == 0) {
			backBtn.style.opacity = "20%";
			textInput.value = data[prog];
			label.innerHTML = fields[prog];
			progressBar.style.width = (prog / fields.length) * 100 + "%";
		} else {
			textInput.style.display = "flex";
			submitBtn.value = "Next";
			// submitBtn.style.flex = "1";
			textInput.value = data[prog];
			label.innerHTML = fields[prog];
			progressBar.style.width = (prog / fields.length) * 100 + "%";
		}
	}

	if (
		label.innerHTML == "Password" ||
		label.innerHTML == "Confirm Password"
	) {
		textInput.style.opacity = "100%";
		textInput.type = "password";
	} else if (label.innerHTML == fields[0]) {
		progressBar.style.opacity = "0%";
		textInput.style.opacity = "100%";
		textInput.type = "text";
	} else if (label.innerHTML == "Done!") {
		textInput.style.opacity = "0%";
		textInput.type = "text";
	} else {
		textInput.type = "text";
		textInput.style.opacity = "100%";
	}
}

// function transition() {
// 	form1.style.opacity = "0%";
// 	setTimeout(() => {
// 		form1.style.opacity = "100%";
// 	}, 600);
// }

function sliderClick(event) {
	if (body.classList == "dark") {
		body.classList = "light";
	} else {
		body.classList = "dark";
	}
}
