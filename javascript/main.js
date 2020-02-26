var fields = ["Username", "Email", "Password", "Confirm"];
var data = ["", "", "", ""];

var container1 = document.getElementById("container-1");
var container2 = document.getElementById("container-2");
var progressBar = document.getElementById("progress");
var label = document.getElementById("label");
var submitBtn = document.getElementById("submit-button");
var textInput = document.getElementById("text-input");
var form1 = document.getElementById("form-1");

var field = -1;
var prog = field + 1;

container1.style.opacity = "100%";

// progressBar.innerHTML = "Progress: " + (prog / fields.length) * 100 + "%";
progressBar.style.width = "0%";
label.innerHTML = fields[field + 1];

submitBtn.addEventListener("click", click);

function click(event) {
	event.preventDefault();
	field++;
	prog = field + 1;

	if (prog == fields.length && data[2] != textInput.value) {
		alert("passwords do not match!");
		field--;
	} else if (prog == fields.length + 1) {
		container1.style.opacity = "0";
		// conatiner1.style.display = "none";
		container2.style.opacity = "100%";
		container2.innerHTML =
			"<h3>Your form has been submitted " + data[0] + "</h3>";
	} else if (prog == fields.length && data[2] == textInput.value) {
		label.innerHTML = "Done";
		progressBar.style.width = "96%";
		// progressBar.innerHTML =
		// 	"Progress: " + (prog / fields.length) * 100 + "%";
		textInput.style.display = "none";
		label.style.flex = "1";
		submitBtn.style.flex = "10";
		submitBtn.value = "Finish!";
	} else {
		label.innerHTML = fields[field + 1];
		progressBar.style.width = (prog / fields.length) * 100 + "%";
		// progressBar.innerHTML =
		// 	"Progress: " + (prog / fields.length) * 100 + "%";
		data[field] = textInput.value;
		textInput.value = "";
	}
}
